import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, NavigatorIOS, Button } from 'react-native';

import { connect } from 'react-redux';

// state map
function mapStateToProps(state) {
    return {};
}

export class BlockInfo extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ width: 500, height: 30 }} />
                <Text style={[styles.header, styles.all]}>
                    2016 Louis Vuitton Keepall
                </Text>
                <Text style={[styles.subtitle, styles.all]}>
                    Classic Monogram          <Text style={[styles.transfer,]}> Transfer </Text>
                </Text>
                <Image
                    style={{
                        width: 200,
                        height: 200,
                        alignSelf: 'center',
                        paddingBottom: 5,
                    }}
                    source={{ url: 'https://a.1stdibscdn.com/archivesE/upload/1121189/v_34701811510039784334/3470181_master.jpg?width=500' }}
                />
                <Text style={[styles.BlockInfo, styles.all]}>
                    Block Info
            </Text >
                <Text style={[styles.hash, styles.all]}>
                    ETH Pop Link:
                <Text style={[styles.blue,]}>  view</Text>
                </Text>
                <Text style={[styles.all, styles.hash]}>
                    Hash: 0x5e4bb521e0b6c18bd40674474f4b1527...
                </Text>
                <View style={{ width: 500, height: 10, backgroundColor: 'white' }} />
                <View style={{ width: 500, height: 2, backgroundColor: '#C9C9C9' }} />
                <Text style={[styles.BlockInfo, styles.all]}>
                    History
            </Text>
                <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
                <Text style={[styles.TopText, styles.all, styles.grayText]}>
                    Item Transfered to You
            <Text style={[styles.gray, styles.date]}>                                4/1/2018
                    </Text>
                </Text>
                <Text style={[styles.BottemText, styles.all, styles.grayText]}>
                    From: 0xb35f68a5d0da29ds2...
                    <Text style={[styles.more,]}>                                     more</Text>
                </Text>
                <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
                <Text style={[styles.TopText, styles.all, styles.grayText]}>
                    Item Transfered
            <Text style={[styles.gray, styles.date]}>                                          3/15/2017
                    </Text>
                </Text>
                <Text style={[styles.BottemText, styles.all, styles.grayText]}>
                    From: 0xb35f68a5d0da29ds2...
                </Text>
                <Text style={[styles.BottemText, styles.all, styles.grayText]}>
                    To: 0x6bd2bd4fa7ec27ef0...
                    <Text style={[styles.more,]}>                                           more
            </Text>
                    <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
                </Text>
                <Text style={[styles.TopText, styles.all, styles.grayText]}>
                    Item Created
            <Text style={[styles.gray, styles.date]}>                                              4/26/2016</Text>
                </Text>
                <Text style={[styles.BottemText, styles.all, styles.grayText]}>
                    Merchant: Louis Vuitton
                    <Text style={[styles.more,]}>                                                   more</Text>
                </Text>
                <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
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


export default connect(mapStateToProps)(BlockInfo);
