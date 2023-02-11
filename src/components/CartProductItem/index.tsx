import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import Styles from './styles';
interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, item} = cartItem;

  const [quantity, setQunatity] = useState(quantityProp);
  return (
    <View style={Styles.root}>
      <View style={Styles.row}>
        <Image
          style={Styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View style={Styles.rightContainer}>
          <Text style={Styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <View style={Styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${item.id}-${i}`}
                style={Styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}

            <Text>{item.ratings}</Text>
          </View>
          <Text style={Styles.price}>
            from ₹{item.price}
            {item.oldPrice && (
              <Text style={Styles.oldPrice}> ${item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={Styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQunatity} />
      </View>
    </View>
  );
};

export default CartProductItem;
