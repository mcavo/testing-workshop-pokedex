import { StyleSheet } from 'react-native';
import { scale, moderateScale } from '@utils/scalingUtils';
import { lightGray } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8
  },
  label: {
    minWidth: scale(80)
  },
  value: {
    minWidth: moderateScale(30),
    marginRight: 40
  },
  progressBarBackground: {
    flexGrow: 1,
    height: 4,
    backgroundColor: lightGray,
    alignSelf: 'center',
    borderRadius: 2
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 2
  }
});
