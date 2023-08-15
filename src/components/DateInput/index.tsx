import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { Text, Input, Container } from "./styled";
import { View } from "react-native";

export default function DateInput(props){
  const [showPicker, setShowPicker] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  function togglePicker(){
    setShowPicker(!showPicker);
  }

  function changeDate(newDate){
    setDate(newDate);
  }

  function getFormattedDate(showDate){
    const day = showDate.getDate() < 10 ? `0${showDate.getDate()}` : showDate.getDate();
    const month = showDate.getMonth() < 10 ? `0${showDate.getMonth() + 1}` : showDate.getMonth() + 1;
    const year = showDate.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return(
    <Container>
      <Text>{props.label}</Text>
      <Input>
        <Text onPress={togglePicker}>{getFormattedDate(date)}</Text>
        {showPicker && (
          <RNDateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              togglePicker();
              changeDate(selectedDate);
            }}
          />
        )}
      </Input>
    </Container>
  );
}