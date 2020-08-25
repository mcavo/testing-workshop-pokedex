import React, { useRef, useCallback, useEffect } from 'react';
import { FlatList, ActivityIndicator, ListRenderItem } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { IState, IPokemonListItem } from '@interfaces/reduxInterfaces';
import PokemonActions from '@redux/pokemon/actions';
import { PokemonListNavigationProp } from '@interfaces/navigation';
import { ListKeyExtractor } from '@interfaces/globalInterfaces';
import ConnectedPlaceholder from '@app/components/ConnectedPlaceholder';
import Routes from '@constants/routes';

import PokemonListItem from './components/PokemonListItem';
import styles from './styles';

interface Props {
  navigation: PokemonListNavigationProp;
}

function PokemonList({ navigation }: Props) {
  const dispatch = useDispatch();
  const paginated = useRef(false);
  const loading = useSelector<IState, boolean>(state => state.pokemon.pokemonListLoading);
  const error = useSelector<IState, string | null>(state => state.pokemon.pokemonListError);
  const pokemons = useSelector<IState, IPokemonListItem[]>(state => state.pokemon.pokemonList.results) || [];

  const getPokemons = useCallback((refresh?: boolean) => dispatch(PokemonActions.getPokemons(refresh)), [
    dispatch
  ]);

  const handlePressPokemon = (pokemon: string) => {
    navigation.navigate(Routes.PokemonDetail, { pokemon });
  };
  const handleGetMorePokemons = useCallback(() => getPokemons(false), [getPokemons]);
  const keyExtractor: ListKeyExtractor<IPokemonListItem> = useCallback(
    ({ name }: IPokemonListItem) => name,
    []
  );
  const renderItem: ListRenderItem<IPokemonListItem> = ({ item, index }) => (
    <PokemonListItem pokemon={item} index={index} onPress={handlePressPokemon} />
  );
  useEffect(() => {
    getPokemons();
  }, [getPokemons]);
  useEffect(() => {
    if (!paginated.current && !!pokemons.length) paginated.current = true;
  }, [paginated, pokemons.length]);

  return (
    <ConnectedPlaceholder
      loading={loading}
      refreshed={paginated.current}
      dataLength={pokemons?.length}
      error={error}
      onRetry={getPokemons}>
      <FlatList<IPokemonListItem>
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleGetMorePokemons}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={loading && !!pokemons?.length ? <ActivityIndicator size="large" /> : null}
        numColumns={2}
        contentContainerStyle={styles.listContentContainer}
      />
    </ConnectedPlaceholder>
  );
}

export default PokemonList;
