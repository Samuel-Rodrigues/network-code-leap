import FastImage from 'react-native-fast-image';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled<any>(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})`
  width: 100%;
  height: ${RFValue(40)}px;
`;
