import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, NavigatorIOS, ScrollView } from 'react-native';
import EthExplorerApi from "../util/routes/EthExplorerApi";
import firebase from "firebase";
import { Header, Button, Spinner } from "../components/common/";
import LoginForm from "../components/LoginForm";

import { connect } from 'react-redux';


// state map
function mapStateToProps(state) {
    return {};
}

class EthExplorer extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    switch (this.state.loggedIn) {
      case true:
        return <ScrollView>
            <View style={{ backgroundColor: "white" }}>
              <View style={{ marginLeft: 20 }}>
                <Text style={[styles.TransInfo]}>
                  Transaction Information
                </Text>
                <Text style={[styles.bold]}>{"\n"}TxHash: </Text>
                <Text>
                  0xfe3848c051023e29cc62843e090e5a5b849ec6eb8ad98bfc8e28af2551116701{
                    "\n"
                  }
                </Text>
                <Text style={[styles.bold]}>TxReceipt Status:</Text>
                <Text style={[styles.Success]}>Success{"\n"}</Text>
                <Text style={[styles.bold]}>Block Height: </Text>
                <Text>3484864 (5797 block confirmations){"\n"}</Text>
                <Text style={[styles.bold]}>TimeStamp: </Text>
                <Text>
                  23 hrs 43 mins ago (Jun-21-2018 09:57:07 PM +UTC){
                    "\n"
                  }
                </Text>
                <Text style={[styles.bold]}>From: </Text>
                <Text>
                  0x9c3e099eb426e48504b7dedfea66824668ec87e0{"\n"}
                </Text>
                <Text style={[styles.bold]}>To: </Text>
                <Text>
                  Contract 0x16c31228f6413043ac0e41e9617394906c7a21ac{
                    "\n"
                  }
                </Text>
                <Text style={[styles.bold]}>Token Transfer: </Text>
                <Text>
                  {" "}
                  2 ERC20 (Twoken Token) from 0x00000000000000... to
                  0x9c3e099eb426e4{"\n"}
                </Text>
                <Text style={[styles.bold]}>Value: </Text>
                <Text>0 Ether ($0.00){"\n"}</Text>
                <Text style={[styles.bold]}>Gas Limit: </Text>
                <Text>320854{"\n"}</Text>
                <Text style={[styles.bold]}>Gas Used By Txn: </Text>
                <Text>213903{"\n"}</Text>
                <Text style={[styles.bold]}>Gas Price: </Text>
                <Text>0.000000001 Ether (1 Gwei){"\n"}</Text>
                <Text style={[styles.bold]}>Actual Tx Cost/Fee: </Text>
                <Text>0.000213903 Ether ($0.000000){"\n"}</Text>
                <Text style={[styles.bold]}>Nonce & [Position]: </Text>
                <Text>
                  {" "}
                  6 | {10}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>Input Data: </Text>
                <Text>
                  /-ë@9Keepall 45 year: 2016, manufacturer: LV,
                  date:6/21/2018
                </Text>
                <View style={{ width: 500, height: 30, backgroundColor: "white" }} />
              </View>
            </View>
          </ScrollView>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
}

const styles = StyleSheet.create({
    bold: {
    fontWeight: "bold"
    },
  TransInfo: {
        fontSize: 25
    },
    Success: {
    color: "#008900"
    }
});

export default connect(mapStateToProps)(EthExplorer);
