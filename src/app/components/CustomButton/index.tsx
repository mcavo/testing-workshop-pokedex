import React, { useCallback, memo, useState, useMemo } from 'react';
import {
  TouchableHighlight,
  Image,
  TouchableHighlightProps,
  ViewStyle,
  ImageStyle,
  TextStyle,
  ActivityIndicator,
  View,
  GestureResponderEvent
} from 'react-native';
import CustomText from '@components/CustomText';
import { VariantsInterface } from '@components/CustomText/constants';
import { primaryBlue } from '@constants/colors';
import { OPACITY } from '@constants/commonStyles';
import { getCustomStyles } from '@utils/styleUtils';

import styles from './styles';
import { VARIANTS } from './constants';
import { getUnderlayColor, getStyles, getFontProp } from './utils';

interface Props extends VariantsInterface {
  activeOpacity?: number;
  big?: boolean;
  blocked?: boolean;
  borderless?: boolean;
  disabled?: boolean;
  icon?: number;
  iconStyle?: ImageStyle;
  link?: boolean;
  loading?: boolean;
  onPress: TouchableHighlightProps['onPress'];
  secondary?: boolean;
  style?: ViewStyle;
  text?: string;
  textStyle?: TextStyle;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

const CustomButton = ({
  activeOpacity = 0,
  blocked,
  disabled,
  icon,
  iconStyle,
  link,
  loading,
  onPress,
  secondary,
  style,
  text,
  textStyle,
  ...props
}: Props) => {
  const [focused, setFocused] = useState(false);
  const customStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles), [props]);
  const customTextStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles, 'Content'), [props]);
  const handlePressIn = useCallback(() => setFocused(true), []);
  const handlePressOut = useCallback(
    (event: GestureResponderEvent) => {
      if (onPress) onPress(event);
      setFocused(false);
    },
    [onPress]
  );
  const { BUTTON_STYLE, TEXT_STYLE, ICON_STYLE } = useMemo(
    () => getStyles(secondary, link, focused, disabled),
    [secondary, link, focused, disabled]
  );
  const fontProp = useMemo(() => getFontProp(link), [link]);
  return loading ? (
    <View style={[styles.containerLoading, style]}>
      <ActivityIndicator size="large" color={primaryBlue} />
    </View>
  ) : (
    <TouchableHighlight
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.container, BUTTON_STYLE, customStyles(), style]}
      underlayColor={getUnderlayColor(secondary, link)}
      activeOpacity={activeOpacity}
      disabled={blocked || disabled}>
      <>
        {icon && <Image source={icon} resizeMode="contain" style={[styles.icon, ICON_STYLE, iconStyle]} />}
        {text && (
          <CustomText {...fontProp} style={[TEXT_STYLE, customTextStyles(), textStyle]} {...props}>
            {text}
          </CustomText>
        )}
      </>
    </TouchableHighlight>
  );
};

CustomButton.defaultProps = {
  activeOpacity: OPACITY.DEFAULT
};

export default memo(CustomButton);
