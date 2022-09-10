import React from 'react';
import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { BottomMenu } from '~/components';
import { Home, PostForm, User } from '~/screens';
import { ROUTES_TYPE, createBottomTabNavigator } from '~/utils';

import theme from '../theme/theme';

const PrivateStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          borderTopEndRadius: theme.marginTheme,
          borderTopStartRadius: theme.marginTheme,
          justifyContent: 'center',
          alignContent: 'center',
          height: RFValue(70),
          paddingTop: Platform.OS === 'ios' ? RFValue(15) : 0,
        },
      }}
    >
      <Tab.Screen
        name={ROUTES_TYPE.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomMenu
              title="Home"
              focused={focused}
              nameIcon="connectdevelop"
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES_TYPE.POST_FORM_TAB}
        component={PostForm}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomMenu title="Post" focused={focused} nameIcon="plus-square" />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate(ROUTES_TYPE.POST_FORM);
          },
        })}
      />
      <Tab.Screen
        name={ROUTES_TYPE.USER}
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomMenu title="User" focused={focused} nameIcon="user" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default PrivateStack;
