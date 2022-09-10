import React, { useState } from 'react';
import {
  StyleProp,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import If from '../If';
import { View } from '../SceneWrapper/styles';
import {
  BoxTextHelper,
  Icon,
  Input,
  Label,
  TextHelper,
  Wrapper,
} from './styles';

type Props = {
  iconName?: string;
  style?: StyleProp<ViewStyle>;
  error?: string;
  label?: string;
  multiline?: boolean;
} & TextInputProps;

const TextInput = ({
  style,
  iconName,
  secureTextEntry,
  error,
  multiline = false,
  label,
  ...rest
}: Props) => {
  const [isFocused, setFocused] = useState(false);
  const [isSecureText, setIsSecureText] = useState(secureTextEntry);

  const toggleFocused = () => setFocused((data) => !data);

  const toggleHidePassword = () => {
    setIsSecureText((data) => !data);
  };

  return (
    <View style={style}>
      <If condition={!!label}>
        <Label>{label}</Label>
      </If>
      <Wrapper isFocused={isFocused} error={!!error} multiline={multiline}>
        <If condition={!!iconName}>
          <Icon name={iconName} error={!!error} />
        </If>
        <Input
          {...rest}
          multiline={multiline}
          onFocus={toggleFocused}
          secureTextEntry={isSecureText}
          onBlur={toggleFocused}
        />
        <If condition={!!secureTextEntry}>
          <TouchableOpacity onPress={toggleHidePassword}>
            <Icon name={isSecureText ? 'eye-off' : 'eye'} error={!!error} />
          </TouchableOpacity>
        </If>
      </Wrapper>
      <If condition={!!error}>
        <BoxTextHelper>
          <TextHelper>{error}</TextHelper>
        </BoxTextHelper>
      </If>
    </View>
  );
};

export default TextInput;
