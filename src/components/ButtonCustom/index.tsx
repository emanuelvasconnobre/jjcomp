import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Vibration } from 'react-native';

export default function ButtonCustom(props) {
  const [opacity, setOpacity] = useState(1);

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: props.backgroundColor,
      opacity: opacity,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: props.color,
    },
  });

  const handlePress = () => {
    setOpacity(0.7);
    Vibration.vibrate(20);
    setTimeout(() => {
      setOpacity(1);
    }, 80);
  };

  return (
    <View>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
}
