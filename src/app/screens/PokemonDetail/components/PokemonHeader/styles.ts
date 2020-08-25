import { StyleSheet } from 'react-native';
import { scale } from '@utils/scalingUtils';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  labelsContainer: {
    flexDirection: 'row'
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    height: scale(200),
    width: '100%',
    alignSelf: 'center'
  },
  flipImage: {
    transform: [{ rotateY: '180deg' }]
  }
});
