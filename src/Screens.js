import React from 'react';
import { Navigation } from 'react-native-navigation';

import AccountsController from './containers/AccountsController';
import ReceiveController from './containers/ReceiveController';
import AccountController from './containers/AccountController';
import TransactionController from './containers/TransactionController';
import QRView from './components/QRView';
import QRScanController from './containers/QRScanController';
import ViewNotification from './components/ViewNotification';
import ProdPage from './containers/ProdPage'
import BlockInfo from './containers/BlockInfo'

export const screensMap = {
  AccountsController,
  ReceiveController,
  AccountController,
  TransactionController,
  QRView,
  QRScanController,
  ViewNotification,
  ProdPage,
  BlockInfo
};

export function registerScreens(store, Provider) {
  for (let key in screensMap) {
    if (screensMap.hasOwnProperty(key)) {
      const ViewObject = screensMap[key];
      Navigation.registerComponent(
        key.toString(),
        () => ViewObject,
        store,
        Provider,
      );
    }
  }
}

export default screensMap;
