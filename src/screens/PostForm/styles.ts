import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { Button, SceneWrapper, TextInput, Typography } from '~/components';

const isIOS = Platform.OS === 'ios';

export const Wrapper = styled(SceneWrapper)`
  padding: ${({ theme }) => theme.pagePadding}px;
  padding-bottom: 0;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const BoxInputs = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => RFValue(theme.marginTheme)}px;
  padding: 0 ${RFValue(4)}px;
`;

export const Input = styled(TextInput)`
  margin-bottom: ${({ theme }) => RFValue(theme.marginTheme)}px;
`;

export const TextAreaInput = styled(TextInput).attrs({ multiline: true })``;

export const Header = styled.View`
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

export const UserName = styled(Typography).attrs({
  flexShrink: 1,
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  margin-left: ${RFValue(12)}px;
  width: 80%;
`;

export const BoxButtonSubmit = styled.View`
  margin-bottom: ${({ theme }) =>
    isIOS ? RFValue(getBottomSpace() + theme.marginTheme) : 0}px;
`;

export const ButtonSubmit = styled(Button)`
  margin: ${RFValue(6)}px 0;
`;

export const UserIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'edit',
  color: theme.colors.primary,
  size: RFValue(40),
}))``;

export const BoxBackButton = styled.View`
  margin: ${RFValue(6)}px 0;
  left: -8px;
`;
