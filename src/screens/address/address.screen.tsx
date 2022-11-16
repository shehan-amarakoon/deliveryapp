import {SafeAreaView, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {HeaderComponent} from '../../components/header/header.component';
import {addressScreenStyle} from './address.screen.style';

const AddressScreen = () => {
  const destinations: number[] = [1, 2];
  return (
    <SafeAreaView>
      <HeaderComponent title="Address" hasBackButton={true} />
      <View style={addressScreenStyle.marginHorizontal}>
        <TextInput label="Origin" />
        {destinations.map((destination: number, index: number) => (
          <TextInput
            key={`destination${index}`}
            label="Destination"
            right={
              destinations.length > 1 ? (
                <TextInput.Icon
                  name="close"
                  color={addressScreenStyle.buttonIconRemove.color}
                  style={addressScreenStyle.buttonIconRemove}
                />
              ) : null
            }
          />
        ))}
      </View>
      <View>
        <Button
          icon="plus"
          style={addressScreenStyle.buttonIconAdd}
          labelStyle={addressScreenStyle.buttonIconAddLabelStyle}
          children={undefined}
        />
      </View>
      <Button
        mode="contained"
        uppercase={false}
        style={addressScreenStyle.readyButtonStyle}
        labelStyle={addressScreenStyle.readyButtonLabelStyle}>
        Ready
      </Button>
    </SafeAreaView>
  );
};

export default AddressScreen;
