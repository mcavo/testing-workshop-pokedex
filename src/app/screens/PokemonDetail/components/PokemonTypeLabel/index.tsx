import React from 'react';
import { View, ViewStyle } from 'react-native';
import CustomText from '@app/components/CustomText';
import { capitalize } from '@utils/stringUtils';
import { getPokemonTypeColorPalette } from '@constants/pokemon';
import { PokemonType } from '@interfaces/pokemon';

import styles from './styles';

interface Props {
  typeName: PokemonType;
  color?: string;
  style?: ViewStyle;
}

function PokemonTypeLabel({ typeName, color, style }: Props) {
  const backgroundColor = color || getPokemonTypeColorPalette(typeName).SECONDARY;
  return (
    <View style={[styles.container, style, { backgroundColor }]}>
      <CustomText white bold xsmall>
        {capitalize(typeName)}
      </CustomText>
    </View>
  );
}

export default PokemonTypeLabel;
