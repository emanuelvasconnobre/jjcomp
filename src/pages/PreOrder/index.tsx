import { View, Text, Button } from "react-native";
import styles from './style';
import ButtonCustom from "../../components/ButtonCustom";

export default function PreOrder(){
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pré-Ordem</Text>
      </View>
      <View style={styles.topButtonsContainer}>
        <ButtonCustom title="Incluir" color="red" width="50" height="50" />
      </View>
    </View>
  );
}