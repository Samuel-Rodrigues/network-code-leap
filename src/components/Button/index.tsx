import React, { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import If from '../If';

import { ButtonContent, Loading, Title, Wrapper } from './styles';

type Props = {
  isSubmitting: boolean;
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'attention';
} & RectButtonProps;

const Button: FC<Props> = ({
  isSubmitting,
  onPress,
  variant = 'primary',
  title,
  ...rest
}) => {
  return (
    <Wrapper>
      <ButtonContent
        onPress={!isSubmitting && onPress}
        variant={variant}
        {...rest}
      >
        <If condition={isSubmitting}>
          <Loading />
        </If>
        <If condition={!isSubmitting}>
          <Title>{title}</Title>
        </If>
      </ButtonContent>
    </Wrapper>
  );
};

export default Button;
