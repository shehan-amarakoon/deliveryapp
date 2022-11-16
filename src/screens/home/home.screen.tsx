import {Image, SafeAreaView} from 'react-native';
import {FAB} from 'react-native-paper';
import MapView, {Marker} from 'react-native-maps';
import {homeScreenStyle} from './home.screen.style';
import React from 'react';
import {HeaderComponent} from '../../components/header/header.component';
import {ConfirmDeliveryCardComponent} from '../../components/confirm-delivery-card/confirm-delivery-card.component';
import {SearchingDeliveryComponent} from '../../components/searching-delivery/searching-delivery.component';

const HomeScreen = () => {
  const state: number = 2;
  return (
    <SafeAreaView style={homeScreenStyle.flex}>
      <HeaderComponent title="Delivery App" />
      <MapView
        style={homeScreenStyle.flex}
        initialRegion={{
          latitude: -3.722,
          longitude: -38.515,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}>
        {state == 2 ? (
          <>
            <Marker
              description="Origin"
              coordinate={{latitude: -3.723, longitude: -38.515}}>
              <Image
                source={require('../../../assets/cyclist.jpg')}
                style={homeScreenStyle.markerImage}
              />
            </Marker>
            <Marker
              description="Destination"
              coordinate={{latitude: -3.723, longitude: -38.513}}>
              <Image
                source={require('../../../assets/cyclist.jpg')}
                style={homeScreenStyle.markerImage}
              />
            </Marker>
          </>
        ) : null}
      </MapView>
      {/* {state == 1 ? <FAB icon="plus" style={homeScreenStyle.fab} /> : null}
      {state == 2 ? <ConfirmDeliveryCardComponent /> : null}
      {state == 3 ? <SearchingDeliveryComponent /> : null} */}
    </SafeAreaView>
  );
};

export default HomeScreen;
