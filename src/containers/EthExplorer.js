import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, NavigatorIOS, Button } from 'react-native';

import { connect } from 'react-redux';

// state map
function mapStateToProps(state) {
    return {};
}

export class EthExplorer extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <Text>TxHash: <Text>0xfe3848c051023e...</Text> </Text>
                <Text>TxReceipt Status: <Text>Success</Text></Text>
                <Text>Block Height: <Text>3484864 (5797 block confirmations)</Text></Text>
                <Text>TimeStamp: <Text>23 hrs 43 mins ago (Jun-21-2018 09:57:07 PM +UTC)</Text></Text>
                <Text>From: <Text>0x9c3e099eb426e48504b7dedfea66824668ec87e0</Text></Text>
                <Text>To: <Text>Contract 0x16c31228f6413043ac0e41e9617394906c7a21ac  </Text></Text>
                <Text>Token Transfer: <Text> 2 ERC20 (Twoken Token)  from 0x000000000000000... to  0x9c3e099eb426e48504b7dedfea66824668ec87e0</Text></Text>
                <Text>Value: <Text>0 Ether ($0.00)</Text></Text>
                <Text>Gas Limit: <Text>320854</Text></Text>
                <Text>Gas Used By Txn: <Text>213903</Text></Text>
                <Text>Gas Price: <Text>0.000000001 Ether (1 Gwei)</Text></Text>
                <Text>Actual Tx Cost/Fee: <Text>0.000213903 Ether ($0.000000)</Text></Text>
                <Text>Nonce & [Position]: <Text></Text>6 | {10}</Text>
                <Text>Input Data: <Text>/-ë@9Keepall 45 year: 2016, manufacturer: LV, date:6/21/2018</Text></Text>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    all: {
        marginLeft: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 24,
        color: '#8E8B93',
    },
    transfer: {
        color: '#4F66EE',
        fontSize: 18,
        backgroundColor: 'whitesmoke',
    },
    BlockInfo: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    blue: {
        color: '#4467DA'
    },
    hash: {
        fontSize: 12,
        fontFamily: 'Apple SD Gothic Neo',
        color: 'black'
    },
    TopText: {
        fontWeight: 'bold',
        fontSize: 14,
        backgroundColor: '#E9E4F1',
    },
    grayText: {
        backgroundColor: '#E9E4F1',
    },
    gray: {
        color: 'dimgray',
    },
    BottemText: {
        fontSize: 12,
        backgroundColor: '#E9E4F1',
        shadowColor: 'black',
    },
    more: {
        color: '#4467DA',
        fontSize: 12,
    },
    date: {
        color: '#8C8794',
        fontFamily: 'Apple SD Gothic Neo',
        fontSize: 15
    }

})


export default connect(mapStateToProps)(EthExplorer);
