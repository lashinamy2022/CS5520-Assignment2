import { View, Text, Pressable } from 'react-native';
import React from 'react'

const PressableButton = ({buttonPressed, children}) => {
  return (
    <Pressable onPress={buttonPressed}>
        {children}
    </Pressable>
  );
};

export default PressableButton;