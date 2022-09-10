import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/actions';
import { BackButton } from '~/components';
import { RootState } from '~/stores';

import {
  Body,
  BoxBackButton,
  ButtonLogOut,
  Divider,
  Email,
  Footer,
  Header,
  LogOutIcon,
  TextInfo,
  TextLogOut,
  UserIcon,
  Username,
  Wrapper,
} from './styles';

const User = () => {
  const {
    user: { user },
  } = useSelector((store: RootState) => store);

  const dispatch = useDispatch<any>();

  const guestMessage = 'Create an account to have data';

  // TODO tratamento quando ficar signOut
  const handleSignOut = () => {
    dispatch(signOut());
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
      <Body>
        <TextInfo>E-mail:</TextInfo>
        <Email>{user.email ? user.email : guestMessage}</Email>
      </Body>
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
