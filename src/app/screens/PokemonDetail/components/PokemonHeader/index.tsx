import React from 'react';
import { View, Image } from 'react-native';
import { IPokemon, IPokemonType } from '@interfaces/reduxInterfaces';
import CustomText from '@components/CustomText';
import { formatPokemonName, formatPokemonIndex } from '@utils/pokemon';
import { PokemonType } from '@interfaces/pokemon';

import PokemonTypeLabel from '../PokemonTypeLabel';

import styles from './styles';

interface Props extends IPokemon {
  color: string;
}

function PokemonHeader({ id, name, types, sprites, color }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <CustomText white bold xbig>
          {formatPokemonName(name)}
        </CustomText>
        <CustomText white bold medium>
          {formatPokemonIndex(id)}
        </CustomText>
      </View>
      <View style={styles.labelsContainer}>
        {types?.map(({ type: { name: pokemonType } }: IPokemonType) => (
          <PokemonTypeLabel
            key={`${name}${pokemonType}`}
            typeName={pokemonType as PokemonType}
            color={color}
          />
        ))}
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: sprites?.frontDefault }} resizeMode="contain" style={styles.image} />
      </View>
    </View>
  );
}

export default PokemonHeader;
