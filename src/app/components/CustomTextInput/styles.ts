import { StyleSheet } from 'react-native';
import { red, lightGray, white, darkGray, blue, gray } from '@constants/colors';
import { BORDER_WIDTH } from '@constants/dimentions';
import { moderateScale } from '@utils/scalingUtils';
import { SIZES } from '@constants/fonts';
import fonts from '@config/fonts';

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
  },
  container: {
    marginBottom: 5
  },
  withAnimatedLabel: {
    marginTop: 20
  },
  multilineContainer: {
    borderColor: darkGray,
    borderWidth: 1,
    height: 75,
    paddingHorizontal: 5
  },
  inputContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: darkGray,
    flexDirection: 'row',
    height: 25,
    justifyContent: 'space-between'
  },
  bottomBorderBlue: {
    borderColor: blue
  },
  bottomBorderRed: {
    borderColor: red
  },
  bottomBorderLightGray: {
    borderColor: gray
  },
  inputStyle: {
    ...fonts.baseFont,
    fontSize: SIZES.SMALL,
    color: darkGray,
    padding: 0,
    margin: 0
  },
  singleInput: {
    flex: 1
  },
  errorContainer: {
    height: 15,
    marginTop: 3
  }
});
