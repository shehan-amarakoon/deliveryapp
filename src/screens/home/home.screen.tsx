import {Image, SafeAreaView, View} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Card,
  FAB,
  IconButton,
  List,
  Title,
} from 'react-native-paper';
import MapView, {Marker} from 'react-native-maps';
import {homeScreenStyle} from './home.screen.style';
import React from 'react';

const HomeScreen = () => {
  const state: number = 2;
  return (
    <SafeAreaView style={homeScreenStyle.flex}>
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
      {state == 2 ? (
        <Card>
          <Card.Content>
            <List.Item
              title="$ 15.00"
              description="Total price of delivery"
              right={() => (
                <View>
                  <Button style={homeScreenStyle.cancelButton}>Cancel</Button>
                  <Button mode="contained">Confirm</Button>
                </View>
              )}
              left={() => (
                <IconButton
                  icon="bike"
                  size={30}
                  style={homeScreenStyle.icon}
                  color={homeScreenStyle.icon.color}
                />
              )}></List.Item>
          </Card.Content>
        </Card>
      ) : null}
      {state == 1 ? <FAB icon="plus" style={homeScreenStyle.fab} /> : null}
      {state == 3 ? (
        <View style={homeScreenStyle.flexCenterColumn}>
          <ActivityIndicator animating={true} />
          <Title style={homeScreenStyle.title}>
            Searching for a delivery person in your region
          </Title>
          <Button mode="contained" style={homeScreenStyle.cancelDeliveryButton}>
            Cancel
          </Button>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;
