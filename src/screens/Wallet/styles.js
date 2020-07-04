import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 35%;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 34px;
  font-weight: 100;
  margin-right: 15px;
`;

export const Bold = styled.Text`
 font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  justify-content: center;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;

export const Actions = styled.View`
  justify-content: space-between;
  flex-direction:row;
  top: 18px;
  margin-bottom: 15px;
`;

export const Action = styled.TouchableOpacity`
  height: 38px;
  width: 130px;
  border: solid 0.8px #eee;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  padding: 2px 12px;
  margin: 0 12px;
`;

export const TitleButton = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 13px;
`;

export const UseBalance = styled.View`
  background-color: #1c1c1e;
  height: 55px;
  flex-direction: row;
  padding: 0 14px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentTitle = styled.Text`
  color: #8e8e93;
  font-size: 12px;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1E232A;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const CardInfo = styled.Text`
  color: #8e8e93;
  font-size: 12px;
  margin-top: 10px;
`;

export const CardButtonAddCredit = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`;

export const CardButtonTitle = styled.Text`
  color: #1ab563;
  font-size: 16px;
  margin-left: 10px;
`;

export const CardImage = styled.Image`
  height: 50px;
  width: 70px;
  top: 10px;
`;

export const AddPromoTicket = styled.TouchableOpacity`
  margin-top: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TicketLabel = styled.Text`
  color: #1ab563;
  font-size: 15px;
  margin-left: 10px;
  text-decoration-line: underline;
`;
