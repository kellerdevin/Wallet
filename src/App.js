import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, NavigatorIOS, Button } from 'react-native';
import { Provider } from 'react-redux';
import Amplify, { Auth } from 'aws-amplify'
import config from '../aws-exports'
import { configureStore } from './Store';
import { registerScreens } from './Screens';
import Navigation from './Navigation';
import { loadIcons } from './util/Icons';
//Amplify.configure(config)
//import '../shim'

// --------------------------------------
// Startup Operations
// --------------------------------------

export default function App() {
  
  const store = configureStore();
  
  registerScreens(store, Provider);

  Promise.all([loadIcons]).then(() => {
    // start the app
    Navigation.init();
  

  });
}
