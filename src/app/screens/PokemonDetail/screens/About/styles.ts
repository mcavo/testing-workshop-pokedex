import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';
import { scale } from '@utils/scalingUtils';

export default StyleSheet.create({
  container: {
    backgroundColor: white
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    backgroundColor: white
  },
  title: {
    marginBottom: 10,
    lineHeight: scale(24)
  }
});
