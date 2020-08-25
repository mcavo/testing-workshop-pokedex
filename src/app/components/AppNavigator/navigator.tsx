/* eslint-disable new-cap */
import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { appStackNavConfig, pokemonDetailTabNavConfig } from '@config/navigation';
import { inferRoute } from '@utils/navUtils';
import PokemonList from '@screens/PokemonList';
import PokemonDetail from '@screens/PokemonDetail';
import About from '@screens/PokemonDetail/screens/About';
import Stats from '@screens/PokemonDetail/screens/Stats';
import Login from '@screens/Login';
import { IState } from '@interfaces/reduxInterfaces';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <>
      {inferRoute(Stack)({ PokemonList })}
      {inferRoute(Stack)({ PokemonDetail })}
    </>
  );
}

function AuthStack() {
  return <>{inferRoute(Stack)({ Login })}</>;
}

const Tab = createMaterialTopTabNavigator();

function PokemonDetailTabStack() {
  return (
    <>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Base Stats" component={Stats} />
    </>
  );
}

export function TabNavigator({ color }: { color?: string }) {
  return <Tab.Navigator {...pokemonDetailTabNavConfig(color)}>{PokemonDetailTabStack()}</Tab.Navigator>;
}

const Navigator = () => {
  const currentUser = useSelector((state: IState) => state.auth.currentUser);
  return <Stack.Navigator {...appStackNavConfig}>{currentUser ? AppStack() : AuthStack()}</Stack.Navigator>;
};
export default Navigator;
