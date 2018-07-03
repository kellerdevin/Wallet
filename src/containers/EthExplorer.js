import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, NavigatorIOS, Button, ScrollView } from 'react-native';
import EthExplorerApi from "../util/routes/EthExplorerApi";

import { connect } from 'react-redux';


// state map
function mapStateToProps(state) {
    return {};
}

class EthExplorer extends Component {
  state = {
    data: "",

  };
  componentDidMount = () => {
    fetch(
      "https://api.etherscan.io/api?module=account&action=txlist&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&startblock=0&endblock=99999999&sort=asc&apikey=MHJ4JGJ9E8AUA4U2MFMY8KQKCHSGH61V9B",
      {
        method: "GET"
        }
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);

        this.setState({ data: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  };
    render() {
        return (
            <ScrollView>
        <View style={{ backgroundColor: "white" }}>
          <View style={{ marginLeft: 20 }}>
                    <Text style={[styles.TransInfo]}>Transaction Information</Text>
                        <Text style={[styles.bold]}>{'\n'}TxHash: </Text> 
                    <Text>0xfe3848c051023e29cc62843e090e5a5b849ec6eb8ad98bfc8e28af2551116701{'\n'}</Text>
                    <Text style={[styles.bold]}>TxReceipt Status:</Text>
            <Text style={[styles.Success]}>Success{"\n"}</Text>
                    <Text style={[styles.bold]}>Block Height: </Text>
            <Text>3484864 (5797 block confirmations){"\n"}</Text>
                    <Text style={[styles.bold]}>TimeStamp: </Text>
            <Text>23 hrs 43 mins ago (Jun-21-2018 09:57:07 PM +UTC){"\n"}</Text>
                    <Text style={[styles.bold]}>From: </Text>
            <Text>0x9c3e099eb426e48504b7dedfea66824668ec87e0{"\n"}</Text>
                    <Text style={[styles.bold]}>To: </Text>
            <Text>
              Contract 0x16c31228f6413043ac0e41e9617394906c7a21ac{"\n"}
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
              /-ë@9Keepall 45 year: 2016, manufacturer: LV, date:6/21/2018
            </Text>
                </View>
            </View>
            </ScrollView>
        );
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
