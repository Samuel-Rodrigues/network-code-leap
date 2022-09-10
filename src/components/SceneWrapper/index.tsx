import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Scroll, View, Wrapper } from './styles';

type Props = { scrollEnable?: boolean; children: any };

const ScreenWrapper = ({ scrollEnable = false, children, ...rest }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper>
        {scrollEnable ? (
          <Scroll {...rest}>{children}</Scroll>
        ) : (
          <View {...rest}>{children}</View>
        )}
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default ScreenWrapper;
