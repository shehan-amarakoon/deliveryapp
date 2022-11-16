import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Button, Title} from 'react-native-paper';
import {searchingDeliveryComponentStyle} from './searching-delivery.component.style';

export const SearchingDeliveryComponent = () => {
  return (
    <View style={searchingDeliveryComponentStyle.flexCenterColumn}>
      <ActivityIndicator animating={true} />
      <Title style={searchingDeliveryComponentStyle.title}>
        Searching for a delivery person in your region
      </Title>
      <Button
        mode="contained"
        style={searchingDeliveryComponentStyle.cancelDeliveryButton}>
        Cancel
      </Button>
    </View>
  );
};
