import { Animated, Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { Button, TextInput, Typography } from '~/components';

export const FIXED_BAR_WIDTH = RFValue(110);
export const BAR_SPACE = RFValue(1);
export const QUANTITY_ITEMS = 2;
export const ITEM_BAR_WIDTH =
  FIXED_BAR_WIDTH / QUANTITY_ITEMS - (QUANTITY_ITEMS - 1) * BAR_SPACE;
const BASE_HEADER_HEIGHT = 30;
export const DIMENSION_WIDTH = Dimensions.get('screen').width;

const minHeaderHeight = RFValue(
  Platform.OS === 'ios'
    ? getStatusBarHeight() + BASE_HEADER_HEIGHT
    : BASE_HEADER_HEIGHT,
);

const borderRadiusHeader = RFValue(44);

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const WrapperForm = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled.View`
  flex: 0.2;
  width: 100%;
  min-height: ${minHeaderHeight}px;
  justify-content: center;
  align-items: center;
  padding: 0 ${RFValue(70)}px;

  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: ${borderRadiusHeader}px;
  border-bottom-right-radius: ${borderRadiusHeader}px;
`;

export const BoxContentBar = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const AnimatedTextBar = styled(Animated.View)`
  top: -3px;
  height: 3px;
`;

export const AnimatedBar = styled(Animated.View)`
  background-color: white;
  height: 10px;
  width: ${ITEM_BAR_WIDTH}px;
`;

export const ButtonHeader = styled(Typography)`
  margin-bottom: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.background};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export const Title = styled(Typography)`
  margin: ${RFPercentage(3)}px 0;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextWelcome = styled(Typography)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${RFValue(10)}px;
`;

export const Body = styled.View`
  padding: 0 ${({ theme }) => RFValue(theme.marginTheme)}px;
  justify-content: space-evenly;
  align-items: center;
  width: ${DIMENSION_WIDTH}px;
`;

export const Input = styled(TextInput)`
  margin: ${RFValue(10)}px 0;
`;

export const ButtonSubmit = styled(Button)`
  margin: ${RFValue(10)}px 0;
`;

export const Footer = styled.View`
  width: 100%;
  flex: 0.1;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: ${borderRadiusHeader}px;
  border-top-right-radius: ${borderRadiusHeader}px;
`;
