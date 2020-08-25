import React from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import i18next from 'i18next';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { MODAL_CONTENT, MODAL_TYPES } from '@components/CustomModal/constants';

import './i18n';
import styles from './styles';

interface Props {
  onPress: () => void;
}

function ErrorPlaceholder({ onPress }: Props) {
  const { icon, title, subtitle } = MODAL_CONTENT[MODAL_TYPES.GENERAL_ERROR];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={icon} resizeMode="contain" style={styles.image} />
        <CustomText semiBold center>
          {title}
        </CustomText>
        <CustomText center style={styles.subtitle}>
          {subtitle}
        </CustomText>
      </View>
      <CustomButton text={i18next.t('ERROR_PLACEHOLDER:RETRY')} onPress={onPress} style={styles.button} />
    </SafeAreaView>
  );
}

export default ErrorPlaceholder;
