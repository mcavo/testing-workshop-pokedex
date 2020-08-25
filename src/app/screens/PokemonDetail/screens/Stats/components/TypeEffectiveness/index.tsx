import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import PokemonTypeLabel from '@screens/PokemonDetail/components/PokemonTypeLabel';
import CustomText from '@components/CustomText';
import { PokemonType, Effectiveness, Effect } from '@interfaces/pokemon';
import { formatPokemonModifier } from '@utils/pokemon';

import './i18n';
import styles from './styles';

interface Props {
  name: string;
  effect: Effect;
  types: Record<PokemonType, Effectiveness>;
}

function TypeEffectiveness({ name, effect, types }: Props) {
  return (
    <>
      <CustomText small semiBold style={styles.title}>
        {i18next.t(`TYPE_EFECTIVENESS:${effect}_TITLE`)}
      </CustomText>
      <CustomText italic xsmall style={styles.subtitle}>
        {i18next.t(`TYPE_EFECTIVENESS:${effect}_SUBTITLE`, { name })}
      </CustomText>
      <View style={styles.container}>
        {Object.entries(types).map(([type, modifier]) => (
          <View style={styles.typeContainer} key={`${type}`}>
            <PokemonTypeLabel typeName={type as PokemonType} style={styles.label} />
            <CustomText semiBold xsmall>
              {formatPokemonModifier(modifier)}
            </CustomText>
          </View>
        ))}
      </View>
    </>
  );
}

export default TypeEffectiveness;
