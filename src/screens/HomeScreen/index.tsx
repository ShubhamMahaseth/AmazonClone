import React from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../dummyData/cart';
import Styles from './styles';

const HomeScreen = () => {
  return (
    <View style={Styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item.item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
