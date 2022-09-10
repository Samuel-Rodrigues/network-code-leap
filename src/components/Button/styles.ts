import {
  GestureHandlerRootView,
  RectButton,
} from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import Typography from '../Typography';

export const Wrapper = styled(GestureHandlerRootView)`
  width: 100%;
`;

export const ButtonContent = styled<any>(RectButton)`
  color: ${({ theme }) => theme.colors.title};
  width: 100%;
  justify-content: center;
  align-items: center;
  height: ${RFValue(50)}px;
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.primary : theme.colors.attention};
  border-radius: ${({ theme }) => RFValue(theme.themeRadius.button)}px;
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
  font-size: ${RFValue(14)}px;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.background,
}))``;
