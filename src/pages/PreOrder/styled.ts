import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 30px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  top: 0;
  margin-top: 35px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  top: 0;
  margin-top: 20px;
`;

export const Body = styled.View`

`;

export const TextInputContainer = styled.View`
  margin-top: 20px;
`;

export const NumPreOrderContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  top: 0;
  margin-top: 35px;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-align: center;
`;

export const LineColumn = styled.View`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

export const LineRow = styled.View`
  display: flex;
  flex-direction: row;
  margin-right: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Space = styled.View<{ $size?: number; }>`
  width: ${({ $size }) => $size || 0}px;
`;

export const InputsContainer = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 13px;
`;