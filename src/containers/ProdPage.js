import React, { Component, } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, NavigatorIOS, Button } from 'react-native';

import { connect } from 'react-redux';

class ProdPage extends Component {

  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.header, styles.all,]}>Wallet                             {'\n'}
          </Text>
        </View>
        <View style={{ width: 500, height: 1, backgroundColor: 'gray' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  all: {
    marginLeft: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  hash: {
    fontSize: 10,
    color: 'gray'
  },
  copy: {
    color: 'blue',
    fontSize: 8,
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold'
  },
});

export default ProdPage;
