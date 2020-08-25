import { StyleSheet, ViewStyle } from 'react-native';
import { scale } from '@utils/scalingUtils';
import { NumberObject } from '@interfaces/globalInterfaces';
import { BORDER_WIDTH } from '@constants/dimentions';

import { SIZES } from './constants';

const ICON_SIZE = 20;
const DEFAULT_BTN_HEIGHT = scale(40);

const COMMON_PROPS_CONTAINERS: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: scale(30),
  height: DEFAULT_BTN_HEIGHT
};

const getSizes = (sizesObj: NumberObject) =>
  Object.keys(sizesObj).reduce(
    (sizes, size) => ({ ...sizes, ...{ [size]: { minWidth: sizesObj[size] } } }),
    {}
  );

export default StyleSheet.create({
  container: {
    ...COMMON_PROPS_CONTAINERS,
    borderRadius: 4,
    minWidth: SIZES.SMALL,
    borderWidth: BORDER_WIDTH.BOLD
  },
  containerLoading: {
    ...COMMON_PROPS_CONTAINERS
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    marginRight: 8
  },
  borderless: {
    borderWidth: BORDER_WIDTH.NONE,
    width: 'auto'
  },
  ...getSizes({
    small: SIZES.SMALL,
    medium: SIZES.MEDIUM,
    large: SIZES.LARGE
  })
});
