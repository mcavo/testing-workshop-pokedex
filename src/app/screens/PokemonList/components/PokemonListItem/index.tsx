import React from 'react';
import { TouchableOpacity } from 'react-native';
import CustomText from '@components/CustomText';
import { IPokemonListItem } from '@interfaces/reduxInterfaces';
import { formatPokemonIndex } from '@utils/pokemon';
import { capitalize } from '@utils/stringUtils';

import styles from './styles';

interface Props {
  pokemon: IPokemonListItem;
  index: number;
  onPress: (pokemon: string) => void;
}

function PokemonListItem({ pokemon, index, onPress }: Props) {
  const handlePress = () => onPress(pokemon.name);
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <CustomText semiBold>{capitalize(pokemon.name)}</CustomText>
      <CustomText gray small>
        {formatPokemonIndex(index + 1)}{' '}
      </CustomText>
    </TouchableOpacity>
  );
}

export default PokemonListItem;
