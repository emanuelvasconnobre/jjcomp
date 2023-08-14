import { Pressable, Text } from "react-native";
import styles from './style';
import { useState } from "react";

export default function ButtonCustom(props){
  const [pressed, setPressed] = useState(false);

  function press(){
    setPressed(!pressed);
  }

  return(
    <>
      <Pressable style={styles.button} onPressIn={press} onPressOut={press}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </>
  )
}