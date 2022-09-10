import React from 'react';

import { NavigationActions } from '~/services';

import { Icon, Wrapper } from './styles';

const BackButton = () => {
  const { goBack } = NavigationActions;
  return (
    <Wrapper onPress={goBack}>
      <Icon />
    </Wrapper>
  );
};

export default BackButton;
