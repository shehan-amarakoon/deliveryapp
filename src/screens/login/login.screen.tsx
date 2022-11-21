import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card, Snackbar, Text, TextInput} from 'react-native-paper';
import {loginStyle} from './login.screen.style';
import {Formik} from 'formik';
import {loginForm} from './login.form';
import {LoadingState} from '../../store/loading/LoadingState';
import {bindActionCreators} from '@reduxjs/toolkit';
import {hide, show} from '../../store/loading/loading.actions';
import {connect} from 'react-redux';
import {AppState} from '../../store/AppState';
import {
  login,
  loginFail,
  loginSuccess,
  recoverPassword,
  recoverPasswordFail,
  recoverPasswordReset,
  recoverPasswordSuccess,
} from '../../store/login/login.actions';
import {LoginState} from '../../store/login/LoginState';
import AuthService from '../../services/AuthService';

interface LoginScreenProps {
  navigation: any;

  loadingState: LoadingState;
  loginState: LoginState;

  recoverPassword: Function;
  recoverPasswordSuccess: Function;
  recoverPasswordReset: Function;
  recoverPasswordFail: Function;
  login: Function;
  loginSuccess: Function;
  loginFail: Function;
  hideLoading: Function;
  showLoading: Function;
}
const LoginScreen = (props: LoginScreenProps) => {
  // States
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [userLogin, setUserLogin] = useState({email: '', password: ''});

  // Hooks
  useEffect(() => {
    if (props.loginState.isRecoveringPassword) {
      props.showLoading();

      console.log('\nrecovery email', recoveryEmail);
      AuthService.recoverPassword(recoveryEmail)
        .then(() => {
          props.recoverPasswordSuccess();
        })
        .catch(error => props.recoverPasswordFail(error));
    } else {
      props.hideLoading();
    }
  }, [props.loginState.isRecoveringPassword]);

  useEffect(() => {
    if (props.loginState.isLoggingIn) {
      props.showLoading();

      AuthService.login(userLogin.email, userLogin.password)
        .then(user => {
          props.loginSuccess(user);
        })
        .catch(error => {
          props.loginFail(error);
        });
    } else {
      props.hideLoading();
    }
  }, [props.loginState.isLoggingIn]);

  useEffect(() => {
    if (props.loginState.isLoggedIn) {
      props.hideLoading();
      props.navigation.navigate('Home');
    }
  }, [props.loginState.isLoggedIn]);

  // Functions
  const login = (userLogin: {email: string; password: string}) => {
    setUserLogin(userLogin);
    props.login();
  };

  const register = () => props.navigation.navigate('Register');
  const forgotEmailPassword = (email: string) => {
    setRecoveryEmail(email);
    props.recoverPassword();
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
                    onPress={() => forgotEmailPassword(values.email)}
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
      {props.loginState.isRecoveredPassword ? (
        <Snackbar
          duration={5000}
          visible={true}
          onDismiss={() => props.recoverPasswordReset()}
          testID="recoverPasswordSuccess">
          Recovery email sent
        </Snackbar>
      ) : null}
      {true ? (
        <Snackbar
          duration={5000}
          visible={props.loginState.error}
          onDismiss={() => props.recoverPasswordReset()}
          testID="errorMessage1">
          {props.loginState.error?.message}
        </Snackbar>
      ) : null}
    </SafeAreaView>
  );
};

const mapStateToProps = (store: AppState) => ({
  loadingState: store.loading,
  loginState: store.login,
});
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      login: login,
      loginSuccess: loginSuccess,
      loginFail: loginFail,
      recoverPassword: recoverPassword,
      recoverPasswordSuccess: recoverPasswordSuccess,
      recoverPasswordReset: recoverPasswordReset,
      recoverPasswordFail: recoverPasswordFail,
      showLoading: show,
      hideLoading: hide,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
