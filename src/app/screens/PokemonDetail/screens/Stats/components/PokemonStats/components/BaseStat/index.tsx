import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import CustomText from '@components/CustomText';
import { red, blue, green } from '@constants/colors';

import './i18n';
import styles from './styles';

interface Props {
  label: string;
  value: number;
  animationProgress: number;
}

function BaseStat({ label, value, animationProgress }: Props) {
  // eslint-disable-next-line no-magic-numbers
  const backgroundColor = value < 30 ? red : value > 70 ? green : blue;
  const width = `${animationProgress > value ? value : animationProgress}%`;
  return (
    <View style={styles.container}>
      <CustomText small style={styles.label}>
        {i18next.t(`BASE_STAT:${label}`)}
      </CustomText>
      <CustomText semiBold small right style={styles.value}>
        {value}
      </CustomText>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBar, { backgroundColor, width }]} />
      </View>
    </View>
  );
}

export default BaseStat;
