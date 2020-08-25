import React from 'react';
import { View } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';

interface Props {
  label: string;
  value: string;
}

function BasicData({ label, value }: Props) {
  return (
    <View style={styles.container}>
      <CustomText small style={styles.label}>
        {label}
      </CustomText>
      <CustomText semiBold small>
        {value}
      </CustomText>
    </View>
  );
}

export default BasicData;
