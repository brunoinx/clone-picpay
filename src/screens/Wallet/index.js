import React, { useState } from 'react';
import { Feather, FontAwesome5, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { StatusBar, Switch } from 'react-native';

import cardImg from '../../images/credit-card.png';

import {
  Wrapper, Header, HeaderContainer, Title, BalanceContainer,
  Value, Bold, EyeButton, Info, Actions, Action, TitleButton,
  UseBalance, UseBalanceTitle, PaymentMethods, PaymentTitle,
  Card, CardDetails, CardTitle, CardInfo, CardButtonAddCredit,
  CardButtonTitle, CardImage, AddPromoTicket, TicketLabel,
} from "./styles";

export default function Wallet() {

  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(false);

  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
  
    return isFocused ? <StatusBar {...props} /> : null;
  }

  function handleClosedBalance() {
    setIsVisible((prevState) => !prevState)
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
      <Wrapper>
        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor={
            useBalance
              ? '#52E78C' 
              : '#d3d3d3'
          }
        />

        <Header
          colors={
            useBalance
              ? ['#52e78c', '#1ab563']
              : ['#d3d3d3', '#868686']
            }
        >
          <HeaderContainer>
            <Title>Saldo PicPay</Title>

            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
              </Value>

              <EyeButton onPress={handleClosedBalance}>
                <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
              </EyeButton>
            </BalanceContainer>

            <Info>Seu saldo está rendendo 100% do CDI</Info>

            <Actions>
              <Action>
                <FontAwesome5 name="money-bill-alt" size={20} color="#fff"/>
                <TitleButton>Adicionar</TitleButton>
              </Action>

              <Action>
                <FontAwesome name="bank" size={20} color="#fff"/>
                <TitleButton>Retirar</TitleButton>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>

        <UseBalance>
          <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
          <Switch
            tintColor='#d3d3d3'
            onTintColor='#52E78C'
            thumbColor= {
              useBalance
              ? '#52E78C' 
              : '#d3d3d3'
            }
            value={useBalance}
            onValueChange={handleToggleUseBalance}
          />
        </UseBalance>

        <PaymentMethods>
          <PaymentTitle>Formas de pagamento</PaymentTitle>

          <Card>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no PicPay.
              </CardInfo>

              <CardButtonAddCredit>
                <MaterialIcons name="add-circle-outline" size={24} color="#1ab563" />
                
                <CardButtonTitle>Adicionar cartão de crédito</CardButtonTitle>
              </CardButtonAddCredit>
            </CardDetails>

            <CardImage source={cardImg} resizeMode="contain" />
          </Card>
        </PaymentMethods>

        <AddPromoTicket>
          <MaterialCommunityIcons name="ticket-percent" size={18} color="#1ab563"/>

          <TicketLabel>Usar código promocional</TicketLabel>
        </AddPromoTicket>
      </Wrapper>
  );
}
