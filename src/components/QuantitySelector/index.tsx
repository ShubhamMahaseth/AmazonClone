import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Styles from './styles';

const QuantitySelector = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={Styles.root}>
      <Pressable style={Styles.button} onPress={onMinus}>
        <Text style={Styles.buttonText}>-</Text>
      </Pressable>
      <Text style={Styles.quantity}>{quantity}</Text>
      <Pressable style={Styles.button} onPress={onPlus}>
        <Text style={Styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;
