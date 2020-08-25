import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';
import { scale } from '@utils/scalingUtils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: scale(150),
    height: scale(150),
    borderRadius: 40,
    marginBottom: 10
  },
  subtitle: {
    marginTop: 10
  },
  button: {
    alignSelf: 'center',
    marginBottom: 32
  }
});
