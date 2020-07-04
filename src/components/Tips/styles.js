import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerstyle: {
    paddingLeft: 16
  }
}))`
  
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  height: 200px;
  width: 125px;
  padding: 10px;
  margin: 0 8px;
  border-radius: 8px;
  justify-content: space-between;
  background: ${({ bgColor }) => bgColor};
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight:bold;
`;

export const Avatar = styled.Image`
  align-self: center;
`;
