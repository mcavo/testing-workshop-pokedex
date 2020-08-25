import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { navigationRef, getActiveRoute, getRoute } from '@navigationHelper';
import withLoadable from '@components/Loadable';
import Routes from '@constants/routes';
import { statusBarStyles } from '@config/navigation';
import { IState } from '@interfaces/reduxInterfaces';

import Navigator from './navigator';

const AppNavigator = () => {
  const [routeName, setRouteName] = useState('');
  useEffect(() => {
    setRouteName(getActiveRoute()?.name);
  }, []);
  const onStateChange = (state?: NavigationState) => {
    const previousRouteName = routeName;
    const currentRouteName = getRoute(state)?.name;
    if (previousRouteName !== currentRouteName) {
      setRouteName(currentRouteName);
    }
  };
  const statusBarProps = statusBarStyles(routeName as Routes);
  return (
    <>
      <StatusBar animated {...statusBarProps} />
      <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
        <Navigator />
      </NavigationContainer>
    </>
  );
};

export default withLoadable(() => useSelector((state: IState) => state.auth.initialLoading))(AppNavigator);
