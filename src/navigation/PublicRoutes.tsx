import React from 'react';
import { Login } from '~/screens';
import { ROUTES_TYPE, createNativeStackNavigator } from '~/utils';

const PublicRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES_TYPE.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
