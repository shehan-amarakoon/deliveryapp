import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Appbar, Button, TextInput} from 'react-native-paper';
import {HeaderComponent} from '../../components/header/header.component';
import {registerScreenStyle} from './register.screen.style';

interface RegisterScreenProps {
  navigation: any;
}

export const RegisterScreen = (props: RegisterScreenProps) => {
  const register = () => props.navigation.navigate('Home');
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderComponent title="Register" />
        <View style={registerScreenStyle.content}>
          <TextInput label="Name" />
          <TextInput label="Email" keyboardType="email-address" />
          <TextInput
            label="Password"
            secureTextEntry={true}
            right={
              <TextInput.Icon
                name="eye-off-outline"
                color={registerScreenStyle.icon.color}
              />
            }
          />
          <TextInput
            label="Confirm password"
            secureTextEntry={true}
            right={
              <TextInput.Icon
                name="eye-off-outline"
                color={registerScreenStyle.icon.color}
              />
            }
          />
          <TextInput label="Phone number" keyboardType="phone-pad" />
          <Button
            mode="contained"
            style={registerScreenStyle.button}
            onPress={register}>
            Register
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
