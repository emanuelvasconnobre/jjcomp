import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Body, Container, Text, PickerContainer } from './styled';

export default function Dropdown(props) {
  const [selectedItem, setSelectedItem] = useState(props.options[0].id);

  const handleItemSelected = (itemValue) => {
    setSelectedItem(itemValue);
  };

  return (
    <Container>
      <Body>
        <Text>{props.label}</Text>
        <PickerContainer>
          <Picker
            selectedValue={selectedItem}
            onValueChange={handleItemSelected}
          >
            {props.options.map((option, index) => (
              <Picker.Item key={index} label={option.label} value={option.id} />
            ))}
          </Picker>
        </PickerContainer>
      </Body>
    </Container>
  );
}