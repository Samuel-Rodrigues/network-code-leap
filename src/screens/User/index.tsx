import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BackButton } from '~/components';
import { RootState, TypedDispatch } from '~/stores';

import { singOut } from '../../redux/usersSlice';

import {
  Body,
  BoxBackButton,
  ButtonLogOut,
  Divider,
  Footer,
  Header,
  LogOutIcon,
  TextLogOut,
  UserIcon,
  Username,
  Wrapper,
} from './styles';

const User = () => {
  const {
    user: { user },
  } = useSelector((store: RootState) => store);

  const dispatch = useDispatch<TypedDispatch>();

  const handleSignOut = () => {
    dispatch(singOut());
  };

  return (
    <Wrapper>
      <BoxBackButton>
        <BackButton />
      </BoxBackButton>
      <Header>
        <UserIcon />
        <Username>{user.username}</Username>
        <Divider />
      </Header>
      <Body />
      <Footer>
        <Divider />
        <ButtonLogOut onPress={handleSignOut}>
          <LogOutIcon />
          <TextLogOut>Log out</TextLogOut>
        </ButtonLogOut>
      </Footer>
    </Wrapper>
  );
};

export default User;
