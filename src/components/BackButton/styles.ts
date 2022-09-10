import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Wrapper = styled.TouchableOpacity`
  margin-bottom: ${RFValue(10)}px;
  width: ${RFValue(30)}px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  name: 'chevron-left',
  size: RFValue(30),
  color: theme.colors.primary,
}))``;
