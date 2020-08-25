import { StyleSheet } from 'react-native';
import { scale } from '@utils/scalingUtils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8
  },
  label: {
    minWidth: scale(80)
  }
});
