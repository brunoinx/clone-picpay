import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  }
}))`
  background-color: #1e222b;
  height: 120px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Image = styled.Image`

`;

export const Label = styled.Text`
  color: #fff;
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
`; 
