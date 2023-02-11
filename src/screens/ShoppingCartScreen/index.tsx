import React from 'react';
import {View, FlatList} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import products from '../../dummyData/cart';
import Styles from './styles';

const ShoppingCartScreen = () => {
  return (
    <View style={Styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ShoppingCartScreen;
