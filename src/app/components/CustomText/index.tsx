import React, { useCallback, memo, ReactNode } from 'react';
import { Text, TextProps } from 'react-native';
import { getCustomStyles } from '@utils/styleUtils';

import { VARIANTS, VariantsInterface } from './constants';
import styles from './styles';

interface Props extends VariantsInterface {
  children: ReactNode;
  textProps?: TextProps;
  style?: any;
}

const CustomText = (props: Props) => {
  const customStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles), [props]);
  const { textProps, style, children } = props;

  return (
    <Text {...textProps} allowFontScaling={false} style={[styles.base, customStyles(), style]}>
      {children}
    </Text>
  );
};

CustomText.defaultProps = {
  textProps: {}
};

export default memo(CustomText);
