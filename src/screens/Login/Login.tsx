import React, { useCallback, useRef } from 'react';
import { useFormikContext } from 'formik';
import { Animated, NativeSyntheticEvent, ScrollView } from 'react-native';

import { Logo } from '~/components';

import Form from './Form';
import { formTabs } from './formConfig';
import {
  AnimatedBar,
  AnimatedTextBar,
  BoxContentBar,
  ButtonHeader,
  DIMENSION_WIDTH,
  Footer,
  HeaderContent,
  ITEM_BAR_WIDTH,
  TextWelcome,
  Wrapper,
} from './styles';

const animatedValue = new Animated.Value(0);

type Props = {
  isSubmitting: boolean;
  toggleValidateAfterSubmit: () => void;
  hasChangeSelectedForm: (position: number, resetForm: any) => void;
};

const Login = ({
  isSubmitting,
  toggleValidateAfterSubmit,
  hasChangeSelectedForm,
}: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const { setErrors } = useFormikContext<FormLogin>();

  const headerContent: JSX.Element[] = [];
  const formsContent: JSX.Element[] = [];

  const handleItemPress = useCallback(
    (index: number) =>
      scrollRef?.current?.scrollTo({
        x: index * DIMENSION_WIDTH,
      }),
    [],
  );

  formTabs.forEach((form, index) => {
    const { type } = form;

    formsContent.push(
      <Form
        isSubmitting={isSubmitting}
        formTab={form}
        key={type}
        toggleValidateAfterSubmit={toggleValidateAfterSubmit}
      />,
    );

    const scrollBarValue = animatedValue.interpolate({
      inputRange: [
        DIMENSION_WIDTH * (index - 1),
        DIMENSION_WIDTH * (index + 1),
      ],
      outputRange: [-ITEM_BAR_WIDTH, ITEM_BAR_WIDTH],
      extrapolate: 'clamp',
    });

    const styleAnimated: any = {
      overflow: 'hidden',
      transform: [
        {
          translateX: scrollBarValue,
        },
      ],
    };

    const contentBar = (
      <BoxContentBar key={type} onPress={() => handleItemPress(index)}>
        <ButtonHeader>{type}</ButtonHeader>
        <AnimatedTextBar style={styleAnimated}>
          <AnimatedBar style={styleAnimated} />
        </AnimatedTextBar>
      </BoxContentBar>
    );

    headerContent.push(contentBar);
  });

  return (
    <Wrapper>
      <HeaderContent>{headerContent}</HeaderContent>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        horizontal
        scrollEventThrottle={10}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animatedValue } } }],
          {
            useNativeDriver: false,
            listener: (event: NativeSyntheticEvent<any>) => {
              hasChangeSelectedForm(
                event?.nativeEvent?.contentOffset?.x,
                setErrors,
              );
            },
          },
        )}
      >
        {formsContent}
      </ScrollView>
      <TextWelcome>Welcome to CodeLeap network!</TextWelcome>
      <Logo />
      <Footer />
    </Wrapper>
  );
};

export default Login;
