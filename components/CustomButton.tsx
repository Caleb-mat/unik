import React from 'react';
import { Pressable, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  boutonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, boutonStyle, textStyle }) => {
  return (
    <Pressable style={({ pressed }) => [styles.button, boutonStyle && boutonStyle, pressed && styles.pressed]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d78058',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
