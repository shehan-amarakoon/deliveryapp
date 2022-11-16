import {StyleSheet} from 'react-native';
import {theme} from '../../../App.style';

export const searchingDeliveryComponentStyle = StyleSheet.create({
  flexCenterColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    margin: 20,
    marginTop: 40,
    textAlign: 'center',
    color: theme.colors.primary,
  },
  cancelDeliveryButton: {
    position: 'absolute',
    margin: '2%',
    bottom: 0,
    width: '96%',
  },
});
