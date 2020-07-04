import React from 'react';

import { Container, Option, Description, Avatar } from "./styles";

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const cards = [
  {
    key: String(Math.random()),
    descrip: 'Pague suas contas sem sair de casa',
    avatar: img11,
    color: '#10c86e'
  },
  {
    key: String(Math.random()),
    descrip: 'Universitário! Cadastre-se e ganhe mais cashback',
    avatar: img8,
    color: '#172c4a'
  },
  {
    key: String(Math.random()),
    descrip: 'Pague parcelado em até 12 vezes',
    avatar: img12,
    color: '#6a0159'
  },
  {
    key: String(Math.random()),
    descrip: 'Pague um amigo rapidamente',
    avatar: img10,
    color: '#4139c8'
  },
  {
    key: String(Math.random()),
    descrip: 'Pague suas festas sem preocupações',
    avatar: img9,
    color: '#ba2f76'
  },
];

export default function Tips() {
  return (
    <Container>
      {cards.map(card => (
        <Option key={card.key} bgColor={card.color}>
        <Description>{card.descrip}</Description>
        <Avatar source={card.avatar}/>
      </Option>
      ))}
    </Container>
  );
}