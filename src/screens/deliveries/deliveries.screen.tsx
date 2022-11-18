import {SafeAreaView, Text, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import {HeaderComponent} from '../../components/header/header.component';
import {deliveriesScreenStyle} from './deliveries.screen.style';

interface DeliveriesScreenProps {
  navigation: any;
}

const DeliveriesScreen = (props: DeliveriesScreenProps) => {
  const deliveries: number[] = [1, 2, 3];

  const goToDeliveryDetails = () => props.navigation.navigate('Delivery');

  return (
    <SafeAreaView>
      <HeaderComponent title="My deliveries" navigation={props.navigation} />
      <FlatList
        data={deliveries}
        keyExtractor={(item, index) => `deliveries${index}`}
        renderItem={({item, index}) => (
          <Card
            onPress={goToDeliveryDetails}
            style={{
              ...deliveriesScreenStyle.card,
              ...deliveriesScreenStyle.cardStatus,
            }}>
            <Card.Cover
              source={{
                uri: 'https://snazzy-maps-cdn.azureedge.net/assets/74-becomeadinosaur.png?v=20170626082939',
              }}
            />
            <Card.Title
              title="99/99/9999"
              titleStyle={deliveriesScreenStyle.cardTitle}
              subtitle="Delivery person name"
              right={() => (
                <Text style={deliveriesScreenStyle.price}>$ 30.00</Text>
              )}
            />
          </Card>
        )}
      />
    </SafeAreaView>
  );
};

export default DeliveriesScreen;
