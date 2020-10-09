import React, { memo } from 'react';
import { TextInput, View } from 'react-native';
import CustomText from '@components/CustomText';
import withFormikField from '@components/withFormikField';
import { transparent } from '@constants/colors';

import InputLabel from './components/InputLabel';
import { CustomTextInputProps as Props } from './interface';
import styles from './styles';

const CustomTextInput = ({
  animated,
  autoCompleteType,
  disabled,
  error,
  errorContainerStyle,
  errorStyle,
  inputContainerStyle,
  inputTextStyles,
  isFocused,
  isOptional,
  label,
  labelStyle,
  multiline,
  onChange,
  placeholder,
  placeholderColor,
  secureTextEntry,
  showError,
  style,
  value,
  ...props
}: Props) => {
  const borderColorStyle = () => {
    if (disabled) return styles.bottomBorderLightGray;
    if (isFocused) return styles.bottomBorderBlue;
    if (showError) return styles.bottomBorderRed;
    return {};
  };
  return (
    <View style={[styles.container, animated && !!label && styles.withAnimatedLabel, style]}>
      {label && (
        <InputLabel
          animated={animated}
          hasValue={!!value}
          isFocused={isFocused}
          isOptional={isOptional}
          label={label}
          labelStyle={labelStyle}
        />
      )}
      <View
        style={[
          multiline ? styles.multilineContainer : styles.inputContainer,
          borderColorStyle(),
          inputContainerStyle
        ]}>
        <TextInput
          {...props}
          autoCompleteType={secureTextEntry ? 'off' : autoCompleteType}
          editable={!disabled}
          multiline={multiline}
          onChangeText={onChange}
          placeholder={(isFocused || !animated) && value === '' ? placeholder : ''}
          placeholderTextColor={placeholderColor}
          style={[styles.inputStyle, !multiline && styles.singleInput, inputTextStyles]}
          value={value}
          testID={label || placeholder}
        />
      </View>
      <View style={[!disabled && styles.errorContainer, errorContainerStyle]}>
        {!isFocused && error && (
          <CustomText error xsmall style={errorStyle}>
            {error}
          </CustomText>
        )}
      </View>
    </View>
  );
};

CustomTextInput.defaultProps = {
  allowFontScaling: false,
  animated: false,
  autoCapitalize: 'none',
  autoCompleteType: 'off',
  autoCorrect: false,
  clearButtonMode: 'never',
  disabled: false,
  keyboardType: 'default',
  maxHeight: 200,
  multiline: false,
  placeholder: '',
  returnKeyType: 'done',
  underlineColorAndroid: transparent
};

const MyCustomTextInput = memo(CustomTextInput);

export const CustomTextInputFormikField = withFormikField(MyCustomTextInput);

export default MyCustomTextInput;
