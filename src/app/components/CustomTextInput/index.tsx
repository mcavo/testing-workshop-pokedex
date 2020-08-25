import React, { memo } from 'react';
import { TextInput, TextInputProps, StyleProp, TextStyle, View } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';

export interface CustomTextInputProps extends TextInputProps {
  error?: string;
  inputStyle?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
}

function CustomTextInput({ error, style, inputStyle, ...props }: CustomTextInputProps) {
  return (
    <View style={style}>
      <TextInput
        allowFontScaling={false}
        style={[styles.input, error ? styles.inputError : {}, inputStyle]}
        {...props}
      />
      <CustomText xsmall error style={styles.error}>
        {error}
      </CustomText>
    </View>
  );
}

export default memo(CustomTextInput);
