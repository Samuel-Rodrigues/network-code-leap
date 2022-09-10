import React from 'react';
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
  ToastProps,
} from 'react-native-toast-message';

import theme from '../../theme/theme';

const { colors } = theme;

export const showAlert = (
  message: string,
  type: 'success' | 'error' | 'info' = 'success',
  title?: string,
) => {
  Toast.show({
    type,
    text1: title || '',
    text2: message,
  });
};

export const toastConfig = {
  success: ({ ...rest }: ToastProps) => (
    <BaseToast
      {...rest}
      style={{
        borderLeftColor: colors.success,
        borderBottomColor: colors.success,
        height: 'auto',
        paddingVertical: 10,
        minHeight: 80,
        borderColor: colors.success,
      }}
      text2NumberOfLines={4}
      text1Style={{
        fontSize: 18,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 17,
        fontWeight: '400',
        color: colors.success,
      }}
    />
  ),

  error: ({ ...rest }: ToastProps) => (
    <ErrorToast
      {...rest}
      style={{
        borderLeftColor: colors.attention,
        height: 'auto',
        paddingVertical: 10,
        minHeight: 80,
      }}
      text2NumberOfLines={8}
      text1Style={{
        fontSize: 18,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 17,
        fontWeight: '400',
      }}
    />
  ),

  info: ({ ...rest }: ToastProps) => (
    <InfoToast
      {...rest}
      style={{
        borderLeftColor: 'blue',
        height: 'auto',
        paddingVertical: 10,
        minHeight: 80,
      }}
      text2NumberOfLines={8}
      text1Style={{
        fontSize: 18,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 17,
        fontWeight: '400',
      }}
    />
  ),
};
