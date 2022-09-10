import React from 'react';

import {
  NavigationContainer,
  NavigationContainerRef,
  ROUTES_TYPE,
  createNativeStackNavigator,
} from '~/utils';

import { MainRoutes } from './MainRoutes';

const Stack = createNativeStackNavigator<RootParamList>();

type Props = {
  setNavigationTop: (navigatorRef: NavigationContainerRef<any>) => void;
};

export function Routes({ setNavigationTop }: Props) {
  return (
    <NavigationContainer ref={setNavigationTop}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES_TYPE.WELCOME} component={MainRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
