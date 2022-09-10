import React, { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { PostForm } from '~/screens';
import { ROUTES_TYPE, STACKS_TYPE, createNativeStackNavigator } from '~/utils';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Stack = createNativeStackNavigator();

export function MainRoutes() {
  const [userAuth, setUserAuth] = useState<FirebaseAuthTypes.User | null>(null);

  const hasAuthUser = () => {
    auth().onAuthStateChanged((user) => {
      setUserAuth(user);
    });
  };

  useEffect(() => {
    return hasAuthUser();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animation: 'flip',
      }}
      initialRouteName={STACKS_TYPE.STACK_PUBLIC}
    >
      {userAuth ? (
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
