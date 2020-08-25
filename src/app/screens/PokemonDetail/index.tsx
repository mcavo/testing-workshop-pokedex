import React, { useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonDetailRouteProp, PokemonDetailNavigationProp } from '@interfaces/navigation';
import { IState, IPokemon } from '@interfaces/reduxInterfaces';
import PokemonActions from '@redux/pokemon/actions';
import ConnectedPlaceholder from '@app/components/ConnectedPlaceholder';
import { getPokemonTypeColorPalette } from '@constants/pokemon';
import { TabNavigator } from '@app/components/AppNavigator/navigator';
import { LoadableType } from '@app/components/Loadable';

import styles, { navigationOptions } from './styles';
import PokemonHeader from './components/PokemonHeader';

interface Props {
  navigation: PokemonDetailNavigationProp;
  route: PokemonDetailRouteProp;
}

function PokemonDetail({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const pokemonName = useRef<string>(route.params.pokemon);
  const pokemon = useSelector<IState, IPokemon>(state => state.pokemon.pokemonDetail);
  const loading = useSelector<IState, boolean>(state => state.pokemon.pokemonDetailLoading);
  const error = useSelector<IState, string | null>(state => state.pokemon.pokemonDetailError);
  const COLORS = getPokemonTypeColorPalette(pokemon.types?.[0].type.name);
  const getPokemonDetail = useCallback(() => {
    dispatch(PokemonActions.getPokemonDetail(pokemonName.current));
  }, [dispatch]);
  useEffect(() => getPokemonDetail(), [getPokemonDetail]);
  useLayoutEffect(() => {
    navigation.setOptions(navigationOptions(COLORS.PRIMARY));
  }, [navigation, COLORS]);

  return (
    <ConnectedPlaceholder
      loading={loading}
      error={error}
      onRetry={getPokemonDetail}
      loadableType={LoadableType.Pokeball}>
      <View style={styles.container}>
        <PokemonHeader {...pokemon} color={COLORS.SECONDARY} />
        <View style={styles.dataContainer}>
          <TabNavigator color={COLORS.PRIMARY} />
        </View>
      </View>
    </ConnectedPlaceholder>
  );
}

export default PokemonDetail;
