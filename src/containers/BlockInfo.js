import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, NavigatorIOS, } from 'react-native';
import ProdPage from './ProdPage'
import { connect } from 'react-redux';
import firebase from "firebase";
import api from "../util/routes/api";
import { Header, Button, Spinner } from "../components/common/";
import LoginForm from "../components/LoginForm";
// state map
function mapStateToProps(state) {
    return {};
}

export class BlockInfo extends Component {
         state = { loggedIn: null };
         constructor(props) {
           super(props);
           this.state = { prodTitle: "", subTitle: "", prodimg:"", Hash: "", toYou: "", FromTrans: "", TextTo: "", DateToYou: "", DateTrans: "", DateCreated: "", Merchant: "" };
         }

         componentDidMount() {
           api
             .twoApi()
             .then(res => {
               this.setState({ prodTitle: res.prodTitle, subTitle: res.subTitle, 
                prodimg: res.prodimg, Hash: res.Hash, toYou: res.toYou, 
                FromTrans: res.FromTrans, TextTo: res.FromTrans, DateToYou: res.FromTrans, TextTo: res.TextTo, DateToYou: res.DateToYou, DateTrans: res.DateTrans, DateCreated: res.DateCreated, Merchant: res.Merchant
               });
             })
             .catch(error => {
               console.error(error);
             });
         }

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
               return <View style={{ backgroundColor: "white" }}>
                   <View style={{ width: 500, height: 30 }} />
                   <Text style={[styles.header, styles.all]}>
                     {this.state.prodTitle}
                   </Text>
                   <Text style={[styles.subtitle, styles.all]}>
                     {this.state.subTitle} <Text style={[styles.transfer]}>
                       {" "}
                       Transfer{" "}
                     </Text>
                   </Text>
                   <Image style={{ width: 200, height: 200, alignSelf: "center", paddingBottom: 5 }} source={{ url: "https://a.1stdibscdn.com/archivesE/upload/1121189/v_34701811510039784334/3470181_master.jpg?width=500" }} />
                   <Text style={[styles.BlockInfo, styles.all]}>
                     Block Info
                   </Text>
                   <Text style={[styles.hash, styles.all]}>
                     ETH EXPLORER:
                     <Text style={[styles.blue]}> view</Text>
                   </Text>
                   <Text style={[styles.all, styles.hash]}>
                     Hash: {this.state.Hash}
                   </Text>
                   <View style={{ width: 500, height: 10, backgroundColor: "white" }} />
                   <View style={{ width: 500, height: 2, backgroundColor: "#C9C9C9" }} />
                   <Text style={[styles.BlockInfo, styles.all]}>
                     History
                   </Text>
                   <View style={{ width: 500, height: 30, backgroundColor: "white" }} />
                   <Text style={[styles.TopText, styles.all, styles.grayText]}>
                     Item Transfered to You
                     <Text style={[styles.gray, styles.date]}>                               {this.state.DateToYou}
                     </Text>
                   </Text>
                   <Text style={[styles.BottemText, styles.all, styles.grayText]}>
                     From: {this.state.FromTrans}
                     <Text style={[styles.more]}> more</Text>
                   </Text>
                   <View style={{ width: 500, height: 30, backgroundColor: "white" }} />
                   <Text style={[styles.TopText, styles.all, styles.grayText]}>
                     Item Transfered
                     <Text style={[styles.gray, styles.date]}>                                          {this.state.DateTrans}
                     </Text>
                   </Text>
                   <Text
                     style={[
                       styles.BottemText,
                       styles.all,
                       styles.grayText
                     ]}
                   >
                     From: {this.state.FromTrans}
                   </Text>
                   <Text style={[styles.BottemText, styles.all, styles.grayText]}>
                     To: {this.state.toYou}
                     <Text style={[styles.more]}> more</Text>
                     <View style={{ width: 500, height: 30, backgroundColor: "white" }} />
                   </Text>
                   <Text style={[styles.TopText, styles.all, styles.grayText]}>
                     Item Created
                     <Text style={[styles.gray, styles.date]}>                                              {this.state.DateCreated}
                     </Text>
                   </Text>
                   <Text style={[styles.BottemText, styles.all, styles.grayText]}>
                     Merchant: {this.state.Merchant}
                     <Text style={[styles.more]}> more</Text>
                   </Text>
                   <View style={{ width: 500, height: 30, backgroundColor: "white" }} />
                 </View>;
             case false:
               return <LoginForm />;
             default:
               return <Spinner size="large" />;
           }
         }
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
