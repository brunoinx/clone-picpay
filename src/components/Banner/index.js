import React from 'react';
import { Feather } from "@expo/vector-icons";

import { Container, Title, Divider, Details, Description, Avatar, PagButton, Pag } from "./styles";

import qrImg from "../../images/06.png";


export default function Banner() {
  return (
    <Container>
      <Divider>
        <Details>
          <Title>Cobre um Amigo</Title>
          <Description>Matenha suas parcerias em dia, use o PicPay para fazer uma cobrança.</Description>
        </Details>

        <Avatar source= {qrImg} />
      </Divider>

      <PagButton>
        <Feather name="arrow-right" size={16} color="#fff"/>
        <Pag>Cobrar Agora</Pag>
      </PagButton>
    </Container>
  );
}

