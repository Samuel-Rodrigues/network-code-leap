import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
})`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: { flex: 1 },
})``;

export const View = styled.View``;
