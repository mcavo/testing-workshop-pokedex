import { StyleSheet } from 'react-native';
import { scale } from '@utils/scalingUtils';

export default StyleSheet.create({
  container: {
    width: scale(60),
    height: scale(60)
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
});
