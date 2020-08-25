import React from 'react';
import { Controller, Control } from 'react-hook-form';
import CustomTextInput, { CustomTextInputProps } from '@components/CustomTextInput';
import { TextInputProps } from 'react-native';
import { ControllerProps } from 'react-hook-form/dist/types/props';

interface Props<TControl extends Control> extends ControllerProps<typeof CustomTextInput, TControl> {
  inputProps?: CustomTextInputProps;
}

interface ControllerRenderInput {
  onChange: (value?: string) => void;
  onBlur: TextInputProps['onBlur'];
  value?: string;
}

function CustomController<TControl extends Control>({ inputProps, ...props }: Props<TControl>) {
  const renderInput = ({ onChange, onBlur, value }: ControllerRenderInput) => (
    <CustomTextInput
      onBlur={onBlur}
      onChangeText={textValue => onChange(textValue)}
      value={value}
      {...inputProps}
    />
  );
  return <Controller<typeof CustomTextInput, TControl> render={renderInput} defaultValue="" {...props} />;
}

export default CustomController;
