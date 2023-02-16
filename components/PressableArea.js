import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react'

const PressableArea = ({areaPressed, children, customizedStyle}) => {
  return (
    <Pressable onPress={areaPressed} style={({pressed})=>{
      return [customizedStyle,styles.pressableDefault, pressed && styles.pressedStyle];
    }}>
        {children}
    </Pressable>
  );
};

export default PressableArea;

const styles = StyleSheet.create({
  pressedStyle: {
    opacity: 0.8,
  },
});