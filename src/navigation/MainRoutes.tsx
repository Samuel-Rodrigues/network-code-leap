import React from 'react';
import { useSelector } from 'react-redux';

import { PostForm } from '~/screens';
import { RootState } from '~/stores';
import { ROUTES_TYPE, STACKS_TYPE, createNativeStackNavigator } from '~/utils';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Stack = createNativeStackNavigator();

export function MainRoutes() {
  const { user } = useSelector((state: RootState) => state);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animation: 'flip',
      }}
      initialRouteName={STACKS_TYPE.STACK_PUBLIC}
    >
      {!!user?.user?.username ? (
        <>
          <Stack.Screen
            name={STACKS_TYPE.STACK_PRIVATE}
            component={PrivateRoutes}
          />
          <Stack.Screen
            name={ROUTES_TYPE.POST_FORM}
            component={PostForm}
            options={{
              gestureEnabled: true,
              animation: 'fade_from_bottom',
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name={STACKS_TYPE.STACK_PUBLIC}
          component={PublicRoutes}
        />
      )}
    </Stack.Navigator>
  );
}
