import { Platform } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import Typography from '../Typography';

type WrapperProps = { isFocused: boolean; error: boolean; multiline: boolean };

type IconProps = { error: boolean };

export const Wrapper = styled.View<WrapperProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border: ${RFValue(1.6)}px solid ${theme.colors.primary};
    `}

  ${({ error, theme }) =>
    error &&
    css`
      border: ${RFValue(1.5)}px solid ${theme.colors.attention};
    `}
  width: 100%;

  ${({ multiline }) =>
    multiline
      ? css`
          min-height: ${RFPercentage(15)}px;
        `
      : css`
          min-height: ${RFValue(54)}px;
        `}

  border-radius: ${RFValue(10)}px;
  max-height: ${RFPercentage(15)}px;
  elevation: ${RFValue(5)};
  box-shadow: 1px 1px 2px;
  shadow-color: ${({ theme }) => Platform.OS === 'ios' && theme.colors.text};
  padding: ${RFValue(5)}px ${RFValue(20)}px;
`;

export const Icon = styled(Feather).attrs<IconProps>(({ theme, error }) => ({
  size: RFValue(22),
  color: error ? theme.colors.attention : theme.colors.primary_dark,
}))``;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.text,
}))`
  flex: 1;
  margin-left: ${RFValue(5)}px;
  height: 100%;
`;

export const TextHelper = styled(Typography)`
  color: ${({ theme }) => theme.colors.attention};
  font-weight: bold;
`;

export const BoxTextHelper = styled.View`
  width: 100%;
  top: ${RFValue(4)}px;
  margin-left: ${RFValue(6)}px;
`;

export const Label = styled(Typography)`
  font-size: ${RFValue(15)}px;
  margin-bottom: ${RFValue(4)}px;
  color: ${({ theme }) => theme.colors.primary};
`;
