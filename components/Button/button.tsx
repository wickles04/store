import React from 'react';
import { Pressable, View,Text } from 'react-native';

import { styles } from './buttonStyle';

type ButtonProps = {
    text:string,
    onPress: () => void
}

export function Button(props:ButtonProps) {
  return (
    <Pressable onPress={props.onPress}>
        <Text>{props.text}</Text>
    </Pressable>
  );
}