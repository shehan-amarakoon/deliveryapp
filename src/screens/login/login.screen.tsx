import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import {loginStyle} from './login.screen.style';
import {Formik} from 'formik';
import {loginForm} from './login.form';
import {LoadingState} from '../../store/loading/LoadingState';
import {bindActionCreators} from '@reduxjs/toolkit';
import {hide, show} from '../../store/loading/loading.actions';
import {connect} from 'react-redux';

interface LoginScreenProps {
  loadingState: LoadingState;
  navigation: any;
  hideLoading: Function;
  showLoading: Function;
}
const LoginScreen = (props: LoginScreenProps) => {
  const login = () => props.navigation.navigate('Home');
  const register = () => props.navigation.navigate('Register');
  const forgotEmailPassword = () => {
    props.showLoading();
    setTimeout(() => {
      props.hideLoading();
    }, 3000);
  };
  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title
            title="Delivery App"
            titleStyle={loginStyle.cardTitle}></Card.Title>
          <Card.Content>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={login}
              validationSchema={loginForm}>
              {({
                handleSubmit,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                values,
              }) => (
                <>
                  <TextInput
                    label="Email"
                    testID="email"
                    keyboardType="email-address"
                    onChangeText={handleChange('email')}
                    onFocus={() => setFieldTouched('email')}
                  />
                  {touched.email && errors.email ? (
                    <Text
                      testID="error-email"
                      style={{color: 'white', backgroundColor: 'red'}}>
                      {errors.email}
                    </Text>
                  ) : null}
                  <TextInput
                    label={'Password'}
                    testID="password"
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                    onFocus={() => setFieldTouched('password')}
                  />
                  {touched.password && errors.password ? (
                    <Text
                      testID="error-password"
                      style={{color: 'white', backgroundColor: 'red'}}>
                      {errors.password}
                    </Text>
                  ) : null}
                  <Button
                    onPress={forgotEmailPassword}
                    uppercase={false}
                    style={loginStyle.cardButton}
                    testID="recoveryButton"
                    disabled={
                      values.email == '' || errors.email ? true : false
                    }>
                    Forgot email/password
                  </Button>
                  <Button
                    testID="loginButton"
                    mode="contained"
                    style={loginStyle.cardButton}
                    onPress={handleSubmit}>
                    Login
                  </Button>
                  <Button
                    testID="registerButton"
                    style={loginStyle.cardButton}
                    onPress={register}>
                    Register
                  </Button>
                </>
              )}
            </Formik>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (store: {loading: LoadingState}) => ({
  loadingState: store.loading,
});
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({hideLoading: hide, showLoading: show}, dispatch);

//export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
export default LoginScreen;
