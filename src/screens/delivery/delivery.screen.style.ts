import {StyleSheet} from 'react-native';
import {theme} from '../../../App.style';

export const deliveryScreenStyle = StyleSheet.create({
  flex: {flex: 1},
  cardTitle: {color: theme.colors.primary},
  price: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginEnd: 15,
  },
});
