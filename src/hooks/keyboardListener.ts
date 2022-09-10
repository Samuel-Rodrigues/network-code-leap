import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboardListener = () => {
  const [keyboardShow, setKeyboardShow] = useState<boolean>();
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardShow(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardShow(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return { keyboardShow };
};
