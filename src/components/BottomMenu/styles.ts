import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

import Typography from '../Typography';

type FocusProps = { focused: boolean };

export const Wrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Typography)<FocusProps>`
  color: ${({ theme }) => theme.colors.background};

  font-weight: ${({ focused }) => (focused ? 'bold' : 400)};
  font-size: ${(focused) => RFValue(focused ? 11 : 12)}px;
`;

export const Icon = styled(FontAwesome).attrs<FocusProps>(
  ({ theme: { colors }, focused }) => ({
    size: RFValue(focused ? 28 : 24),
    color: colors.background,
  }),
)``;
