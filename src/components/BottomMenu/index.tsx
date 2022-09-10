import React from 'react';
import { Icon, Title, Wrapper } from './styles';

type Props = { title: string; focused: boolean; nameIcon: string };

const BottomMenu = ({ title, focused, nameIcon }: Props) => (
  <Wrapper>
    <Icon focused={focused} name={nameIcon} />
    <Title focused={focused}>{title}</Title>
  </Wrapper>
);

export default BottomMenu;
