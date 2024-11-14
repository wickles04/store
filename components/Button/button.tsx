import React from 'react';
import { Pressable, View,Text } from 'react-native';

import { styles } from './buttonStyle';

type ButtonProps = {
    text:string,
    function: () => void
}

export function Button(props:ButtonProps) {
  return (
    <Pressable onPress={props.function} style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
  );
}