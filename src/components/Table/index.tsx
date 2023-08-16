import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function Table(props: any){
  const [titleName, setTitleName] = React.useState(props.title);
  const [itens, setItens] = React.useState(props.itens);

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          {
            titleName.map((title: any) => {
              return <DataTable.Title textStyle={styles.title}>{title}</DataTable.Title>
            })
          }
        </DataTable.Header>

        {
          itens.map((item: any) => {
            return (
              <DataTable.Row>
                <DataTable.Cell textStyle={styles.title}>{item.numPreOrder}</DataTable.Cell>
                <DataTable.Cell textStyle={styles.title}>{item.date}</DataTable.Cell>
                <DataTable.Cell textStyle={styles.title}>{item.nameClient}</DataTable.Cell>
              </DataTable.Row>
            )
          })
        }
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 50,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  }
});