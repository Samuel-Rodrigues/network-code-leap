import React, { useRef } from 'react';
import { ScrollView } from 'react-native';

import { Logo } from '~/components';

import Form from './Form';
import { formTabs } from './formConfig';
import { Footer, HeaderContent, Icon, TextWelcome, Wrapper } from './styles';

type Props = {
  isSubmitting: boolean;
  toggleValidateAfterSubmit: () => void;
};

const Login = ({ isSubmitting, toggleValidateAfterSubmit }: Props) => {
  const scrollRef = useRef<ScrollView>(null);

  return (
    <Wrapper>
      <HeaderContent>
        <Icon />
      </HeaderContent>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        horizontal
        scrollEventThrottle={10}
        pagingEnabled
      >
        <Form
          isSubmitting={isSubmitting}
          formTab={formTabs[0]}
          toggleValidateAfterSubmit={toggleValidateAfterSubmit}
        />
      </ScrollView>

      <TextWelcome>Welcome to CodeLeap network!</TextWelcome>
      <Icon />
      <Logo />
      <Footer />
    </Wrapper>
  );
};

export default Login;
