import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import('./config/ReactotronConfig');

import { NavigationActions } from '~/services';
import { persist, store } from '~/stores';
import { NavigationContainerRef, toastConfig } from '~/utils';

import { Routes } from './navigation';
import theme from './theme/theme';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <ThemeProvider theme={theme}>
          <StatusBar backgroundColor={theme.colors.primary} />
          <Routes
            setNavigationTop={(
              navigatorRef: NavigationContainerRef<any>,
            ): void => NavigationActions.setTopLevelNavigator(navigatorRef)}
          />
          <Toast visibilityTime={3000} topOffset={30} config={toastConfig} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
