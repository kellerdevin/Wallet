import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  NavigatorIOS,
  ScrollView
} from "react-native";
import api from "../util/routes/api";
import EthApi from "../util/routes/EthApi";
import EthExplorerApi from "../util/routes/EthExplorerApi"
import firebase from "firebase";
import { Header, Button, Spinner } from "../components/common/";
import LoginForm from "../components/LoginForm";

import { connect } from "react-redux";

// state map
function mapStateToProps(state) {
    return {};
}

class EthExplorer extends Component {
  state = { loggedIn: null };
  constructor(props) {
    super(props);
    this.state = {
        TxHash: "",
        Status: '',
        BlockHeight: '',
        TimeStamp: '',
          From: '',
          For: '',
          TokenTransfer: '',
          Value: '',
          GasLimit: '',
          GasUsedByTxn: '',
          GasPrice: '',
          ActualTxCostFee: '',
          NoncePosition: '',
          InputData: '',
    };
  }

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

  componentDidMount() {
    api
      .twoApi()
      .then(res => {
        this.setState({
          TxHash: res.TxHash,
          Status: res.Status,
          BlockHeight: res.BlockHeight,
          TimeStamp: res.TimeStamp,
          From: res.From,
          For: res.For,
          TokenTransfer: res.TokenTransfer,
          Value: res.Value,
          GasLimit: res.GasLimit,
          GasUsedByTxn: res.GasUsedByTxn,
          GasPrice: res.GasPrice,
          ActualTxCostFee: res.ActualTxCostFee,
          NoncePosition: res.NoncePosition,
          InputData: res.InputData,
          
        });
      })
      .catch(error => {
        console.error(error);
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
                  {this.state.TxHash}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>TxReceipt Status:</Text>
                <Text style={[styles.Success]}>
                  {this.state.Status}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>Block Height: </Text>
                <Text>
                  {this.state.BlockHeight}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>TimeStamp: </Text>
                <Text>
                  {this.state.TimeStamp}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>From: </Text>
                <Text>
                  {this.state.From}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>To: </Text>
                <Text>
                  {this.state.To}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>Token Transfer: </Text>
                <Text>
                  {" "}
                  {this.state.TokenTransfer}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>Value: </Text>
                <Text>
                  {this.state.Value}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>Gas Limit: </Text>
                <Text>
                  {this.state.GasLimit}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>Gas Used By Txn: </Text>
                <Text>
                  {this.state.GasUsedByTxn}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>Gas Price: </Text>
                <Text>
                  {this.state.GasPrice}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>Actual Tx Cost/Fee: </Text>
                <Text>
                  {this.state.ActualTxCostFee}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>Nonce & [Position]: </Text>
                <Text>
                  {" "}
                  {this.state.NoncePosition}
                  {"\n"}
                </Text>
                <Text style={[styles.bold]}>Input Data: </Text>
                <Text>{this.state.InputData}</Text>
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
