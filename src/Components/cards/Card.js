import React from 'react';
import { Cards, Name, Description } from './styled';

export default function Card(props) {
  const { name, desc } = props;
  return (
    <Cards>
      <Name>{name}</Name>
      <Description>{desc}</Description>
    </Cards>
  );
}
