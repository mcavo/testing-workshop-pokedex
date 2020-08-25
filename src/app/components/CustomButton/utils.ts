import { primaryBlue, blue, white, mediumGray, extraLightGray, gray, transparent } from '@constants/colors';
import { GENERAL_BOX_SHADOW } from '@constants/commonStyles';

import styles from './styles';

export const getUnderlayColor = (secondary?: boolean, link?: boolean) => {
  if (secondary) return white;
  if (link) return transparent;
  return blue;
};

const getBackgroundColor = (
  secondary: boolean = false,
  link: boolean,
  focused: boolean,
  disabled?: boolean
) => {
  if (secondary) return white;
  if (link) return transparent;
  let color: string = primaryBlue;
  if (focused) color = blue;
  if (disabled) color = extraLightGray;
  return color;
};

const getColor = (secondary: boolean = false, link: boolean, focused: boolean, disabled?: boolean) => {
  let color: string = secondary || link ? primaryBlue : white;
  if (focused && (secondary || link)) color = blue;
  if (disabled) color = link ? gray : mediumGray;
  return color;
};

export const getStyles = (
  secondary: boolean = false,
  link: boolean = false,
  focused: boolean,
  disabled?: boolean
) => {
  const color = getColor(secondary, link, focused, disabled);
  const backgroundColor = getBackgroundColor(secondary, link, focused, disabled);
  const borderColor = disabled ? gray : color;
  const tintColor = color;
  return {
    BUTTON_STYLE: {
      ...(link || !secondary ? styles.borderless : {}),
      ...(link || disabled ? {} : GENERAL_BOX_SHADOW),
      backgroundColor,
      borderColor
    },
    TEXT_STYLE: {
      color
    },
    ICON_STYLE: {
      tintColor
    }
  };
};

export const getFontProp = (link: boolean = false) => (link ? { link } : { button: true });
