import styled from 'styled-components/native';

export const Container = styled.View`
  background: #6882bb;
  margin: 25px 13px;
  padding: 14px;
  height: 150px;
  border-radius: 8px;
  justify-content: space-between;
`;

export const Divider = styled.View`
  flex-direction: row;
  align-items: center;
  top: 10px;
`;

export const Details = styled.View`
  flex: 1;
  bottom: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #fff;
  margin: 16px 0;
  opacity: 0.7;
`;

export const Avatar = styled.Image``;

export const PagButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Pag = styled.Text`
  color: #fff;
  font-size: 15px; 
  font-weight: bold;
  margin-left: 10px;
`;

