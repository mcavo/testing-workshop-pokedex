import { StyleSheet } from 'react-native';
import { moderateScale } from '@utils/scalingUtils';

export default StyleSheet.create({
  container: {
    minWidth: moderateScale(70),
    borderRadius: 15,
    paddingVertical: 5,
    alignItems: 'center',
    marginRight: 5
  }
});
