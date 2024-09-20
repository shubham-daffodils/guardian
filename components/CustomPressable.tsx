import React, { ReactNode } from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

interface CustomPressableProps extends PressableProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CustomPressable: React.FC<CustomPressableProps> = ({ children, style, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1, // Global opacity change on press
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default CustomPressable;
