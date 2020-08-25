import { StyleSheet } from 'react-native';
import { red, lightGray, white } from '@constants/colors';
import { BORDER_WIDTH } from '@constants/dimentions';
import { moderateScale } from '@utils/scalingUtils';
import { SIZES } from '@constants/fonts';

const SPACING = 10;

export default StyleSheet.create({
  input: {
    borderColor: lightGray,
    backgroundColor: white,
    padding: SPACING,
    borderRadius: 4,
    borderWidth: BORDER_WIDTH.REGULAR
  },
  inputError: {
    borderColor: red
  },
  error: {
    maxHeight: moderateScale(SIZES.SMALL),
    marginLeft: SPACING,
    marginBottom: 14,
    marginTop: 6
  }
});
