import styled from 'styled-components/native';

export const Container = styled.View<{ $size?: number; }>`
  align-items: center;
  width: ${({ $size }) => $size ? `${$size}%` : '100%'};
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const Input = styled.TextInput`
  height: 50px;
  border: 1px solid black;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
  background-color: white;

  /* uppercase */
`;

export const Body = styled.View`
  width: 90%;
`;