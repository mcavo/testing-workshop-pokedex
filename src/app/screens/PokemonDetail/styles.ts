import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';
import fonts from '@config/fonts';

export const navigationOptions = (color: string) => ({
  headerStyle: {
    backgroundColor: color,
    shadowOpacity: 0
  },
  cardStyle: {
    backgroundColor: color
  },
  headerBackTitleStyle: {
    color: white
  },
  headerTitleStyle: {
    ...fonts.baseFont,
    color: white
  },
  headerTintColor: white
});

export default StyleSheet.create({
  container: {
    flex: 1
  },
  dataContainer: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 0
  }
});
