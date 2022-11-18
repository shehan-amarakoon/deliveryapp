import React, {useState} from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {headerComponentStyle} from './header.component.style';

interface HeaderComponentParams {
  navigation?: any;
  hasBackButton?: boolean;
  title: string;
}

export const HeaderComponent = (props: HeaderComponentParams) => {
  const [visible, setVisible] = useState(false);

  const goBack = () => props.navigation?.goBack();
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const goToMyDeliveries = () => {
    props.navigation?.navigate('Deliveries');
    closeMenu();
  };
  const logout = () => {
    props.navigation?.navigate('Login');
    closeMenu();
  };

  return (
    <Appbar>
      {props.hasBackButton ? (
        <Appbar.BackAction onPress={goBack} />
      ) : (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="menu"
              color={headerComponentStyle.menu.color}
              onPress={openMenu}
            />
          }>
          <Menu.Item title="My deliveries" onPress={goToMyDeliveries} />
          <Menu.Item title="Logout" onPress={logout} />
        </Menu>
      )}
      <Appbar.Content title={props.title} />
    </Appbar>
  );
};

interface HeaderComponentParams {
  title: string;
  hasBackButton?: boolean;
}
