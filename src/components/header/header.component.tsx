import React from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {headerComponentStyle} from './header.component.style';

export const HeaderComponent = (props: HeaderComponentParams) => {
  return (
    <Appbar>
      {props.hasBackButton ? (
        <Appbar.BackAction />
      ) : (
        <Menu
          visible={true}
          onDismiss={() => {}}
          anchor={
            <Appbar.Action
              icon="menu"
              color={headerComponentStyle.menu.color}
            />
          }
          children={undefined}></Menu>
      )}
      <Appbar.Content title={props.title} />
    </Appbar>
  );
};

interface HeaderComponentParams {
  title: string;
  hasBackButton?: boolean;
}
