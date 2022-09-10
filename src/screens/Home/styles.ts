import { Animated } from 'react-native';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { Typography } from '~/components';

export const Wrapper = styled.View`
  flex: 1;
  padding-top: ${ifIphoneX(getStatusBarHeight(), 0)}px;
  justify-content: center;
`;

export const ViewAnimated = styled(Animated.View).attrs(({ theme }) => ({
  shadowRadius: 20,
  shadowColor: theme.colors.primary,
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.3,
}))`
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  margin-bottom: ${RFValue(18)}px;
  elevation: 30;
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(20)}px;
  justify-content: center;
`;

export const BoxContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BoxName = styled.View`
  flex-direction: column;
  margin-left: ${RFValue(6)}px;
  flex-shrink: 1;
  max-width: 75%;
`;

export const UserName = styled(Typography).attrs({
  flexShrink: 1,
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;

export const TitleContent = styled(Typography).attrs({
  flexShrink: 1,
  numberOfLines: 1,
})`
  font-size: ${RFValue(13)}px;
  margin-top: ${RFValue(8)}px;
`;

export const ScrollTextContent = styled.View`
  justify-content: center;
`;

export const TextContent = styled(Typography)`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${RFValue(10)}px;
  line-height: ${RFValue(18)}px;
  font-size: ${RFValue(12)}px;
  text-align: justify;
  padding: ${RFValue(10)}px;

  color: ${({ theme }) => theme.colors.primary_dark};
`;

export const UserData = styled.View`
  flex-direction: row;
`;

export const EditIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'edit',
  color: theme.colors.primary,
  size: RFValue(20),
}))``;

export const UserIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'user',
  color: theme.colors.primary,
  size: RFValue(48),
}))``;

export const FooterLoading = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: RFValue(40),
  color: theme.colors.primary,
}))`
  margin-top: ${RFValue(5)}px;
`;
