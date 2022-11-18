import {SafeAreaView, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {HeaderComponent} from '../../components/header/header.component';
import {deliveryRouteScreenStyle} from './delivery-route.screen.styles';

interface DeliveryRouteScreenProps {
  navigation: any;
}

const DeliveryRouteScreen = (props: DeliveryRouteScreenProps) => {
  const destinations: number[] = [1, 2];

  const loadDeliveryPricing = () => props.navigation.navigate('Delivery');

  return (
    <SafeAreaView>
      <HeaderComponent
        title="Address"
        hasBackButton={true}
        navigation={props.navigation}
      />
      <View style={deliveryRouteScreenStyle.marginHorizontal}>
        <TextInput label="Origin" />
        {destinations.map((destination: number, index: number) => (
          <TextInput
            key={`destination${index}`}
            label="Destination"
            right={
              destinations.length > 1 ? (
                <TextInput.Icon
                  name="close"
                  color={deliveryRouteScreenStyle.buttonIconRemove.color}
                  style={deliveryRouteScreenStyle.buttonIconRemove}
                />
              ) : null
            }
          />
        ))}
      </View>
      <View>
        <Button
          icon="plus"
          style={deliveryRouteScreenStyle.buttonIconAdd}
          labelStyle={deliveryRouteScreenStyle.buttonIconAddLabelStyle}
          children={undefined}
        />
        <Button
          mode="contained"
          uppercase={false}
          style={deliveryRouteScreenStyle.readyButtonStyle}
          labelStyle={deliveryRouteScreenStyle.readyButtonLabelStyle}
          onPress={loadDeliveryPricing}>
          Ready
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryRouteScreen;
