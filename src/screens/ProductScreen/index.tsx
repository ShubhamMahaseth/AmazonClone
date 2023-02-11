import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import product from '../../dummyData/product';
import ImageCarousel from '../../components/ImageCarousel';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import Styles from './styles';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQunatity] = useState(1);
  return (
    <ScrollView style={Styles.root}>
      <Text style={Styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>

      <Text style={Styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={Styles.oldPrice}>${product.oldPrice}</Text>
        )}
      </Text>

      <Text style={Styles.description}>{product.description}</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQunatity} />
      <Button
        text={'Add To Cart'}
        onPress={() => {
          console.log('Add to Cart');
        }}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.log('Buy Now');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
