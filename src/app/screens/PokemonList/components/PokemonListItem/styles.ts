import { StyleSheet } from 'react-native';
import { SPACING } from '@constants/dimentions';
import { white } from '@constants/colors';
import { GENERAL_BOX_SHADOW } from '@constants/commonStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.MEDIUM,
    margin: 5,
    backgroundColor: white,
    borderRadius: 10,
    alignItems: 'center',
    ...GENERAL_BOX_SHADOW
  },
  title: {
    marginBottom: 10
  }
});
