import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { Typography } from '~/components';

export const Wrapper = styled.View`
  justify-content: space-between;
  margin-top: ${ifIphoneX(getStatusBarHeight() + 10, 10)}px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => RFValue(theme.pagePadding)}px;
  padding-top: 0;
  flex: 1;
`;

export const BoxBackButton = styled.View`
  margin: ${RFValue(6)}px 0;
  left: -${RFValue(13)}px;
`;

export const Header = styled.View`
  border-bottom-color: ${({ theme }) => theme.colors.text};
`;

export const Username = styled(Typography)`
  margin-top: ${RFValue(10)}px;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;

export const UserIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'user',
  color: theme.colors.primary,
  size: RFValue(46),
}))``;

export const Body = styled.View`
  flex: 1;
`;

export const Footer = styled.View``;

export const ButtonLogOut = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: ${RFPercentage(20)}px;
`;

export const LogOutIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'log-out',
  color: theme.colors.primary,
  size: RFValue(22),
}))`
  margin-right: ${RFValue(4)}px;
`;

export const TextLogOut = styled(Typography)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`;

export const Divider = styled.View`
  border-top-color: ${({ theme }) => theme.colors.text};
  border-top-width: ${RFValue(1)}px;
  margin: ${({ theme }) => RFValue(theme.marginTheme)}px 0;
`;
