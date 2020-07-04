import React from 'react';
import { StatusBar } from "react-native";
import { MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance, ButtonContainer } from "./styles";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <ButtonContainer>
            <AntDesign name="gift" size={27} color="#10c86e" />
            <FontAwesome name="percent" size={27} color="#10c86e" />
          </ButtonContainer>
        </Header>
        
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
