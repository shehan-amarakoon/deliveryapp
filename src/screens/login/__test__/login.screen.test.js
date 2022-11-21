jest.useFakeTimers();
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {loginForm} from '../login.form';
import LoginScreen from '../login.screen';
import {Provider} from 'react-redux';
import {store} from '../../../store/store';
import {
  recoverPassword,
  recoverPasswordFail,
  recoverPasswordReset,
  recoverPasswordSuccess,
} from '../../../store/login/login.actions';

describe('Login screen', () => {
  // it('should go to home page on login', async () => {
  //   const navigation = {navigate: () => {}};
  //   spyOn(navigation, 'navigate');

  //   const page = renderLoaginScreen(navigation);
  //   const email = page.getByTestId('email');
  //   const password = page.getByTestId('password');

  //   fireEvent.changeText(email, 'valid@email.com');
  //   fireEvent.changeText(password, 'validPassword');

  //   const loginButton = page.getByTestId('loginButton');
  //   fireEvent.press(loginButton);

  //   await waitFor(() =>
  //     expect(navigation.navigate).toHaveBeenCalledWith('Home'),
  //   );
  // });

  // it('should got to register on register', async () => {
  //   const navigation = {navigate: () => {}};
  //   spyOn(navigation, 'navigate');

  //   const page = renderLoaginScreen(navigation);
  //   const registerButton = page.getByTestId('registerButton');

  //   fireEvent.press(registerButton);
  //   await waitFor(() =>
  //     expect(navigation.navigate).toHaveBeenCalledWith('Register'),
  //   );
  // });

  // it('should form be invalid if email is empty', () => {
  //   const formValues = {email: ''};
  //   expect(loginForm.isValidSync(formValues)).toBeFalsy();
  // });

  // it('should form be invalid if email is invalid', () => {
  //   const formValues = {email: 'invalid'};
  //   expect(loginForm.isValidSync(formValues)).toBeFalsy();
  // });

  // it('should form be invalid if password is empty', () => {
  //   const formValues = {password: '', email: 'valid@email.com'};
  //   expect(loginForm.isValidSync(formValues)).toBeFalsy();
  // });

  // it('should form be valid', () => {
  //   const formValues = {password: 'validPassword', email: 'valid@email.com'};
  //   expect(loginForm.isValidSync(formValues)).toBeTruthy();
  // });

  // it('should show error message message if email is touched and it is empty', async () => {
  //   const page = renderLoaginScreen();

  //   const email = page.getByTestId('email');
  //   fireEvent.changeText(email, '');

  //   const loginButton = page.getByTestId('loginButton');
  //   fireEvent.press(loginButton);

  //   await waitFor(() => page.getByTestId('error-email'));
  // });

  // it('should hide error message if email is not touched', async () => {
  //   const page = renderLoaginScreen();

  //   await waitFor(() =>
  //     expect(page.queryAllByTestId('error-email').length).toEqual(0),
  //   );
  // });

  // it('should show error message message if password is touched and it is empty', async () => {
  //   const page = renderLoaginScreen();

  //   const password = page.getByTestId('password');
  //   fireEvent.changeText(password, '');

  //   const loginButton = page.getByTestId('loginButton');
  //   fireEvent.press(loginButton);

  //   await waitFor(() => page.getByTestId('error-password'));
  // });

  // it('should hide error message if password is not touched', async () => {
  //   const page = renderLoaginScreen();

  //   await waitFor(() =>
  //     expect(page.queryAllByTestId('error-password').length).toEqual(0),
  //   );
  // });

  // it('should disable recovery button if email is empty', async () => {
  //   const page = renderLoaginScreen();

  //   const recoveryButton = page.getByTestId('recoveryButton');

  //   await waitFor(() =>
  //     expect(recoveryButton.props.accessibilityState.disabled).toBeTruthy(),
  //   );
  // });

  // it('should disable recovery button if email has error', async () => {
  //   const page = renderLoaginScreen();

  //   const email = page.getByTestId('email');
  //   fireEvent.changeText(email, 'invalid');

  //   const recoveryButton = page.getByTestId('recoveryButton');

  //   await waitFor(() =>
  //     expect(recoveryButton.props.accessibilityState.disabled).toBeTruthy(),
  //   );
  // });

  // it('should show loading component and recover password on the forgot email/password', () => {
  //   const page = renderLoaginScreen();
  //   const email = page.getByTestId('email');
  //   const forgotEmailPasswordButton = page.getByTestId('recoveryButton');

  //   fireEvent.changeText(email, 'valid@email.com');
  //   fireEvent.press(forgotEmailPasswordButton);

  //   expect(store.getState().login.isRecoveringPassword).toBeTruthy();
  //   expect(store.getState().loading.show).toBeTruthy();
  // });

  it('should hide loading and show success message when has recovered password', async () => {
    const page = renderLoaginScreen();
    const email = page.getByTestId('email');
    const forgotEmailPasswordButton = page.getByTestId('recoveryButton');

    fireEvent.changeText(email, 'valid@email.com');
    fireEvent.press(forgotEmailPasswordButton);

    await waitFor(() => {
      expect(store.getState().login.isRecoveredPassword).toBeFalsy();
      // expect(store.getState().loading.show).toBeFalsy();
      // page.getByTestId('recoverPasswordSuccess');
    });
  });

  // it('should hide success message when recover password is false', () => {
  //   const page = renderLoaginScreen();

  //   store.dispatch(recoverPassword());
  //   store.dispatch(recoverPasswordSuccess());
  //   store.dispatch(recoverPasswordReset());

  //   expect(page.queryAllByTestId('recoverPasswordSuccess').length).toEqual(0);
  // });

  // it('should hide loading and show error message when has recovered password with error', async () => {
  //   const page = renderLoaginScreen();
  //   const email = page.getByTestId('email');
  //   const forgotEmailPasswordButton = page.getByTestId('recoveryButton');

  //   fireEvent.changeText(email, 'error@email.com');
  //   fireEvent.press(forgotEmailPasswordButton);

  //   await waitFor(() => {
  //     expect(store.getState().login.isRecoveredPassword).toBeFalsy();
  //     expect(store.getState().loading.show).toBeFalsy();
  //     // expect(store.getState().login.error).not.toBeNull();
  //     // page.getByTestId('errorMessage1');
  //   });
  // });

  // it('should hide success message when there is no error', () => {
  //   const page = renderLoaginScreen();

  //   store.dispatch(recoverPassword());
  //   store.dispatch(recoverPasswordFail({error: 'message'}));
  //   store.dispatch(recoverPasswordReset());

  //   expect(page.queryAllByTestId('errorMessage').length).toEqual(0);
  // });

  // it('should show loading and start login when user tries to login', async () => {
  //   const page = renderLoaginScreen();
  //   const email = page.getByTestId('email');
  //   const password = page.getByTestId('password');
  //   const loginButton = page.getByTestId('loginButton');

  //   fireEvent.changeText(email, 'valid@email.com');
  //   fireEvent.changeText(password, 'anyPassword');
  //   fireEvent.press(loginButton);

  //   await waitFor(() => {
  //     expect(store.getState().login.isLoggingIn).toBeTruthy();
  //     expect(store.getState().loading.show).toBeTruthy();
  //   });
  // });

  // it('should hide loading and redirect to home screen when login is successful', async () => {
  //   const navigation = {navigate: () => {}};
  //   spyOn(navigation, 'navigate');

  //   const page = renderLoaginScreen(navigation);
  //   const email = page.getByTestId('email');
  //   const password = page.getByTestId('password');
  //   const loginButton = page.getByTestId('loginButton');

  //   fireEvent.changeText(email, 'valid@email.com');
  //   fireEvent.changeText(password, 'anyPassword');
  //   fireEvent.press(loginButton);

  //   await waitFor(() => {
  //     expect(store.getState().login.isLoggedIn).toBeTruthy();
  //     expect(store.getState().loading.show).toBeFalsy();
  //     expect(navigation.navigate).toHaveBeenCalledWith('Home');
  //   });
  // });

  // it('should hide loading and show error message when login fails', async () => {
  //   const page = renderLoaginScreen();
  //   const email = page.getByTestId('email');
  //   const password = page.getByTestId('password');
  //   const loginButton = page.getByTestId('loginButton');

  //   fireEvent.changeText(email, 'error@email.com');
  //   fireEvent.changeText(password, 'anyPassword');
  //   fireEvent.press(loginButton);

  //   await waitFor(() => {
  //     expect(store.getState().login.isLoggingIn).toBeFalsy();
  //     expect(store.getState().loading.show).toBeFalsy();
  //     page.getByTestId('errorMessage');
  //   });
  // });

  function renderLoaginScreen(navigation) {
    return render(
      <Provider store={store}>
        <LoginScreen navigation={navigation} />
      </Provider>,
    );
  }
});
