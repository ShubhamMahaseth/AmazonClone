import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Styles from './style';

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: object;
}

const Button = ({text, onPress, containerStyles}: ButtonProps) => {
  return (
    <Pressable style={[Styles.root, containerStyles]} onPress={onPress}>
      <Text style={Styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
