import React from 'react';
import { appScreensNavOptions } from '@config/navigation';
import Routes from '@constants/routes';
import { StackNavigationOptions } from '@react-navigation/stack';

export function inferRoute(NavigationStructure: any) {
  return function screenComponent(screenObj: any) {
    const screenName = Routes[Object.keys(screenObj)?.[0] as Routes];
    return (
      <NavigationStructure.Screen
        name={screenName}
        component={screenObj[screenName]}
        options={appScreensNavOptions[screenName] as StackNavigationOptions}
      />
    );
  };
}
