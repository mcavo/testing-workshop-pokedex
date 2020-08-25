import { Platform } from 'react-native';

import { extraLightGray } from './colors';

export const GENERAL_BOX_SHADOW = {
  ...Platform.select({
    ios: {
      shadowColor: extraLightGray,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 10
    },
    android: {
      elevation: 4
    }
  })
};

export const OPACITY = {
  DEFAULT: 0.7,
  NONE: 1
};
