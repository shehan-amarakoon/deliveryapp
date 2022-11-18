import {SafeAreaView, View, Text} from 'react-native';
import {HeaderComponent} from '../../components/header/header.component';
import MapView from 'react-native-maps';
import {deliveryScreenStyle} from './delivery.screen.style';
import {Avatar, Card, List} from 'react-native-paper';

interface DeliveryScreenProps {
  navigation: any;
}

const DeliveryScreen = (props: DeliveryScreenProps) => {
  return (
    <SafeAreaView style={deliveryScreenStyle.flex}>
      <HeaderComponent
        title="Delivery details"
        hasBackButton={true}
        navigation={props.navigation}
      />
      <View style={deliveryScreenStyle.flex}>
        <MapView
          initialRegion={{
            latitude: -3.722,
            longitude: -38.515,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
          style={deliveryScreenStyle.flex}></MapView>
      </View>
      <Card>
        <Card.Title
          title={'99/99/9999'}
          titleStyle={deliveryScreenStyle.cardTitle}
          right={() => (
            <Text style={deliveryScreenStyle.price}>$ 30.00</Text>
          )}></Card.Title>
        <Card.Content>
          <List.Item
            title="Paulo Alves"
            description="53 deliveries"
            left={() => (
              <Avatar.Image
                size={52}
                source={{
                  uri: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
                }}
              />
            )}
          />
          <List.Item
            title="Origin"
            description="Origin street, 60"
            left={() => <List.Icon icon="flag-outline" />}
          />
          <List.Item
            title="Destination"
            description="Destination street, 10"
            left={() => <List.Icon icon="flag-checkered" />}
          />
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
