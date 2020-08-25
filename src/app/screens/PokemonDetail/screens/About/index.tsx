import React, { useCallback, useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomText from '@components/CustomText';
import PokemonActions from '@redux/pokemon/actions';
import ConnectedPlaceholder from '@components/ConnectedPlaceholder';
import { IState, IPokemon, IPokemonSpecies, IGenus, IFlavorTextEntry } from '@interfaces/reduxInterfaces';
import {
  formatPokemonHeight,
  formatPokemonWeight,
  formatPokemonSpecies,
  formatPokemonTextEntry,
  formatPokemonAbilities
} from '@utils/pokemon';

import styles from './styles';
import BasicData from './components/BasicData';

function About() {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector<IState, IPokemon>(state => state.pokemon.pokemonDetail);
  const pokemonSpecies = useSelector<IState, IPokemonSpecies>(state => state.pokemon.pokemonSpecies);
  const loading = useSelector<IState, boolean>(state => state.pokemon.pokemonSpeciesLoading);
  const error = useSelector<IState, string | null>(state => state.pokemon.pokemonSpeciesError);
  const getPokemonSpecies = useCallback(() => {
    dispatch(PokemonActions.getPokemonSpecies());
  }, [dispatch]);
  const { genera, flavorTextEntries } = pokemonSpecies;
  const enGenera = useMemo(() => genera?.find((genus: IGenus) => genus.language.name === 'en'), [genera]);
  const enTextEntry = useMemo(
    () => flavorTextEntries?.find((entry: IFlavorTextEntry) => entry.language.name === 'en'),
    [flavorTextEntries]
  );
  const abilities = useMemo(() => formatPokemonAbilities(pokemonDetail.abilities), [pokemonDetail]);
  useEffect(() => getPokemonSpecies(), [getPokemonSpecies]);
  return (
    <ConnectedPlaceholder
      loading={loading}
      error={error}
      onRetry={getPokemonSpecies}
      style={styles.container}>
      <View style={styles.contentContainer}>
        <CustomText semiBold small style={styles.title}>
          {formatPokemonTextEntry(enTextEntry?.flavorText)}
        </CustomText>
        <BasicData label="Species" value={formatPokemonSpecies(enGenera?.genus)} />
        <BasicData label="Height" value={formatPokemonHeight(pokemonDetail.height)} />
        <BasicData label="Weight" value={formatPokemonWeight(pokemonDetail.weight)} />
        <BasicData label="Abilities" value={abilities} />
      </View>
    </ConnectedPlaceholder>
  );
}

export default About;
