import { StyleSheet } from 'react-native';
import { transparentBlack, white } from '@constants/colors';
import { scale } from '@utils/scalingUtils';

const CLOSE_ICON_SIZE = scale(18);
const CLOSE_ICON_SIZE_CONTAINER = scale(30);
const MEDIUM_PADDING = 20;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: MEDIUM_PADDING
  },
  modal: {
    backgroundColor: white,
    width: '100%',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 23,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWithoutSubtitle: {
    marginTop: 23
  },
  closeIconContainer: {
    width: CLOSE_ICON_SIZE_CONTAINER,
    height: CLOSE_ICON_SIZE_CONTAINER,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    right: MEDIUM_PADDING
  },
  close: {
    width: CLOSE_ICON_SIZE,
    height: CLOSE_ICON_SIZE
  },
  image: {
    width: scale(130),
    height: scale(91),
    borderRadius: 40,
    marginBottom: 10
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 18
  },
  button: {
    paddingHorizontal: scale(15),
    minWidth: scale(140),
    alignSelf: 'center'
  },
  outsideModal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  titleWithoutSubtitle: { marginBottom: 16 }
});
