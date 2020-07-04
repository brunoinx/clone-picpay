import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  Text,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Text>Atividades</Text>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@newBrunoSousa</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Bruno Sousa</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 20,00</Value>

            <Divider />

            <Feather name="lock" color="#eee" size={13}/>
            <Date>há 5 meses</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#eee"/>
              <OptionLabel>0</OptionLabel>
            </Option>
            
            <Option>
              <AntDesign name="hearto" size={14} color="#eee"/>
              <OptionLabel>0</OptionLabel>
            </Option>

          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}

