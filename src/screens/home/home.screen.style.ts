import {StyleSheet} from 'react-native';
import {theme} from '../../../App.style';

export const homeScreenStyle = StyleSheet.create({
  flex: {flex: 1, backgroundColor: theme.colors.primary},
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 16,
    color: 'white',
    backgroundColor: theme.colors.primary,
  },
  markerImage: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
});
