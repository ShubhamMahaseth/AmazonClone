import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  console.log('hello shubham');
  return (
    <View>
      <AntDesign name="customerservice" size={30} color="#900" />
      <Text>Hello</Text>
    </View>
  );
};

export default App;
