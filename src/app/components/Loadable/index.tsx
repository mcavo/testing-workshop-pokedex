import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Loadable as PropsLoadable } from '@interfaces/globalInterfaces';
import { white } from '@constants/colors';

import PokemonLoader from '../PokemonLoader';

import styles from './styles';

export enum LoadableType {
  Pokeball,
  Default
}

interface Props {
  color?: string;
  type?: LoadableType;
}

export const Loading = ({ color, type }: Props) => (
  <View style={styles.container}>
    {type === LoadableType.Pokeball ? (
      <PokemonLoader />
    ) : (
      <ActivityIndicator size="large" color={color || white} />
    )}
  </View>
);

const LoadableWrapper = (
  shouldLoad: (props: PropsLoadable) => boolean,
  type: LoadableType = LoadableType.Default
) => (WrappedComponent: React.ComponentType<any>) => {
  const Loadable = (props: any, color: string) =>
    shouldLoad(props) ? <Loading color={color} type={type} /> : <WrappedComponent {...props} />;
  return Loadable;
};

export default LoadableWrapper;
