import { fontMaker } from '@utils/fontUtils';
import { darkGray } from '@constants/colors';

import { SEMIBOLD, BOLD, ITALIC, SIZES } from '../constants/fonts';

// Here you can make your custom fonts
// I only recommend using family if you have more than one Font Family in the App.
export default {
  baseFont: fontMaker({ size: SIZES.MEDIUM, color: darkGray }),
  baseItalicFont: fontMaker({ size: SIZES.MEDIUM, color: darkGray, style: ITALIC }),
  semiBoldFont: fontMaker({ weight: SEMIBOLD, size: SIZES.MEDIUM, color: darkGray }),
  boldFont: fontMaker({ weight: BOLD, size: SIZES.MEDIUM, color: darkGray }),
  headerTitle: fontMaker({ weight: BOLD, size: SIZES.BIG, color: darkGray }),
  tabLabel: fontMaker({ size: SIZES.SMALL }),
  button: fontMaker({ weight: SEMIBOLD })
};
