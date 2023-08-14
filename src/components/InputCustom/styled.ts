import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const Input = styled.TextInput<{ $size?: number; }>`
  height: 50px;
  border: 1px solid black;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
  background-color: white;
  width: ${({ $size }) => $size || 0}px;
`;

export const Body = styled.View`
  width: 90%;
`;