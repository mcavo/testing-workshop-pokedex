import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import AppNavigator from '@components/AppNavigator';
import AuthActions from '@redux/auth/actions';
import { apiSetup } from '@config/api';

import './i18n';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    apiSetup(dispatch);
    dispatch(AuthActions.init());
  }, [dispatch]);

  return <AppNavigator />;
}

const MyAppWithOverlay = __DEV__ ? ((Reactotron.overlay(App) as unknown) as () => JSX.Element) : App;

export default MyAppWithOverlay;
