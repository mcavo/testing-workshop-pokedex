import React from 'react';
import { TextStyle } from 'react-native';
import i18next from 'i18next';
import LogoutButton from '@components/LogoutButton';
import { white, darkGray, extraLightGray, firePrimaryColor, gray } from '@constants/colors';
import Routes from '@constants/routes';
import statusBarConfig from '@constants/statusBar';
import { GenericObjectInterface } from '@interfaces/globalInterfaces';
import { DefaultNavOptions } from '@interfaces/navigation';

import fonts from './fonts';
import { StackNavigationOptions } from '@react-navigation/stack';

// Default nav options for all screens
const defaultNavOptions = ({ route }: DefaultNavOptions) => ({
  // Change screen title from i18n traslates files
  headerTitle: i18next.t(`app:${route.name}`),
  headerBackTitle: '',
  headerStyle: {
    backgroundColor: white,
    borderBottomWidth: 0,
    shadowOpacity: 0
  },
  cardStyle: {
    backgroundColor: white
  },
  headerBackTitleStyle: {
    color: darkGray
  },
  headerTitleStyle: {
    ...fonts.baseFont,
    color: darkGray
  },
  headerTintColor: darkGray
});

const defaultTopTabNavOptions = (backgroundColor: string) => ({
  activeTintColor: darkGray,
  labelStyle: {
    ...fonts.tabLabel,
    textTransform: 'capitalize'
  } as TextStyle,
  indicatorStyle: {
    backgroundColor,
    height: 5,
    borderRadius: 2.5
  },
  upperCaseLabel: false
});

export const pokemonDetailTabNavConfig = (backgroundColor?: string) => ({
  initialRouteName: Routes.About,
  tabBarOptions: defaultTopTabNavOptions(backgroundColor || gray),
  lazy: true
});

export const appStackNavConfig = {
  screenOptions: defaultNavOptions,
  initialRouteName: Routes.PokemonList
};

// Default nav options for all screens
export const appScreensNavOptions: GenericObjectInterface<StackNavigationOptions> = {
  // TODO: Add here the screens nav options that changes with respect to
  // the default ones defined in defaultNavOptions, for example...
  [Routes.PokemonList]: {
    headerTitleStyle: {
      ...fonts.headerTitle,
      color: white
    },
    headerRight: () => <LogoutButton />,
    headerTintColor: white,
    headerStyle: {
      backgroundColor: firePrimaryColor,
      borderBottomWidth: 0,
      shadowOpacity: 0
    },
    cardStyle: {
      backgroundColor: extraLightGray
    }
  },
  [Routes.PokemonDetail]: {
    headerTitle: undefined,
    headerStyle: {
      backgroundColor: white,
      shadowOpacity: 0
    },
    cardStyle: {
      backgroundColor: white
    },
    headerBackTitleStyle: {
      color: darkGray
    },
    headerTitleStyle: {
      ...fonts.baseFont,
      color: darkGray
    },
    headerTintColor: darkGray
  },
  [Routes.Login]: {
    headerShown: false
  }
};

export const statusBarStyles = (routeName: Routes) =>
  ({
    [Routes.Login]: statusBarConfig.transparentStatusBar,
    [Routes.PokemonList]: statusBarConfig.transparentStatusBarWhite,
    [Routes.PokemonDetail]: statusBarConfig.transparentStatusBarWhite,
    [Routes.About]: statusBarConfig.transparentStatusBarWhite,
    [Routes.Stats]: statusBarConfig.transparentStatusBarWhite
  }[routeName] || statusBarConfig.transparentStatusBarWhite);
