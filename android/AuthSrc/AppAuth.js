import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View
} from 'react-native';

import Amplify, { Auth } from 'aws-amplify'
import config from '../../aws-exports'
Amplify.configure(config)

export default class AppAuth extends Component {
    signUp(){
        Auth.signUp({
            username:'Devin@two.io',
            password: 'password123'
        })
    }
    confirmUser() {

    }
    render() {
        return(
            <View>
                <Text>
                    HOEEEEEE
                </Text>
            </View>
        )
    }
}


