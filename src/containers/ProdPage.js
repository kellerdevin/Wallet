import React, { Component, PropTypes} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, NavigatorIOS, } from 'react-native';
import api from '../util/routes/api'
import firebase from "firebase";
import { Header, Button, Spinner } from '../components/common/'
import LoginForm from "../components/LoginForm";


import { connect } from 'react-redux';

// state map
function mapStateToProps(state) {
  return {};
}

class ProdPage extends Component {
         state = { loggedIn: null };
         constructor(props) {
           super(props);
           this.state = { blockinfo: "", avatar: "", prodTitle: "", subTitle: "", prodimg: "", RAP1T: "", RAP1ST: "", RAP1img: "", RAP2T: "", RAP2ST: "", RAP2img: "", RAP3T: "", RAP3ST: "", RAP3img: "" };
         }

         componentDidMount() {
           api
             .twoApi()
             .then(res => {
               this.setState({
                 blockinfo: res.blockinfo,
                 prodTitle: res.prodTitle,
                 subTitle: res.subTitle,
                 prodimg: res.prodimg,
                 RAP1T: res.RAP1T,
                 RAP1ST: res.RAP1ST,
                 RAP1img: res.RAP1img,
                 RAP2T: res.RAP2T,
                 RAP2ST: res.RAP2ST,
                 RAP2img: res.RAP2img,
                 RAP3T: res.RAP3T,
                 RAP3ST: res.RAP3ST,
                 RAP3img: res.RAP3img
               });
             })
             .catch(error => {
               console.error(error);
             });
         }

         componentWillMount() {
           firebase.initializeApp({
             apiKey: "AIzaSyAm8W1O7eCai0zaqaSLkheGElyLwajJ3JY",
             authDomain: "auth-87f79.firebaseapp.com",
             databaseURL: "https://auth-87f79.firebaseio.com",
             projectId: "auth-87f79",
             storageBucket: "auth-87f79.appspot.com",
             messagingSenderId: "701060929041"
           });

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
                   <View style={{ flexDirection: "row" }}>
                     <Text style={[styles.header, styles.all]}>
                       Wallet {"\n"}
                       <Text style={[styles.hash, styles.all]}>
                         {this.state.blockinfo}
                         <Text style={[styles.copy]}>COPY</Text>
                         <Text> </Text>
                       </Text>
                     </Text>
                   </View>
                   <View style={{ width: 500, height: 1, backgroundColor: "gray" }} />

                   <View style={{ width: 500, height: 5, backgroundColor: "white" }} />
                   <Text
                     style={[styles.blue, styles.newProd, styles.all]}
                   >
                     NEW PRODUCT
                   </Text>
                   <Text style={[styles.prodTitle, styles.all]}>
                     {this.state.prodTitle}
                   </Text>
                   <Text
                     style={[styles.subTitle, styles.gray, styles.all]}
                   >
                     {this.state.subTitle}
                   </Text>
                   <Image style={{ width: 180, height: 180, alignSelf: "center", paddingBottom: 5 }} source={{ uri: "https://a.1stdibscdn.com/archivesE/upload/1121189/v_34701811510039784334/3470181_master.jpg?width=500" }} />
                   <View style={{ width: 500, height: 1, backgroundColor: "gray" }} />
                   <View style={{ width: 500, height: 10, backgroundColor: "white" }} />
                   <Text style={[styles.recentAdd, styles.bold, styles.all]}>
                     Recent Additions
                     <Text style={[styles.seeAll, styles.blue]}>
                       {" "}
                       See All
                     </Text>
                     <View style={{ width: 500, height: 5, backgroundColor: "white" }} />
                   </Text>
                   <View style={{ flexDirection: "row" }}>
                     <View>
                       <Image style={styles.rA} source={{ url: this.state.RAP1img }} />
                     </View>
                     <Text style={[styles.rat]}>
                       {"\n"}Jaeger-LeCoultre Polaris {"\n"}
                       <Text style={[styles.rast]}>
                         Chronograph, PINK GOLD <Text
                           style={[styles.views]}
                         >
                           {" "}
                           View{" "}
                         </Text>
                         {"\n"}
                         {"\n"} {"\n"}
                         <View style={{ width: 500, height: 1, backgroundColor: "grey" }} />
                       </Text>
                     </Text>
                   </View>
                   <View style={{ flexDirection: "row" }}>
                     <Image style={styles.rA} source={{ url: this.state.RAP2img }} />
                     <Text style={[styles.rat]}>
                       {"\n"} Hermes Birkin {"\n"}
                       <Text style={[styles.rast]}>
                         30cm Craie Epsom Birkin <Text
                           style={[styles.views]}
                         >
                           {" "}
                           View{" "}
                         </Text>
                         {"\n"}
                         {"\n"} {"\n"}
                         <View style={{ width: 500, height: 1, backgroundColor: "grey" }} />
                       </Text>
                     </Text>
                   </View>
                   <View style={{ flexDirection: "row" }}>
                     <Image style={styles.rA} source={{ url: this.state.RAP3img }} />
                     <Text style={[styles.rat]}>
                       {"\n"}Louis Vuitton / Supreme {"\n"}
                       <Text style={[styles.rast]}>
                         Christopher Backpack PM <Text
                           style={[styles.views]}
                         >
                           {" "}
                           View{" "}
                         </Text>
                         {"\n"}
                         {"\n"} {"\n"}
                         <View style={{ width: 500, height: 1, backgroundColor: "grey" }} />
                       </Text>
                     </Text>
                   </View>
                 </View>;
             case false:
               return <LoginForm />;
             default:
               return <Spinner size="large" />;
           }
         }
       }

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 22,
  },
  all: {
    marginLeft: 20,
  },
  header: {
    fontSize: 30,
  },
  bold: {
    fontWeight: 'bold',
  },
  hash: {
    fontSize: 10,
  },
  gray: {
    color: 'dimgray',
  },
  blue: {
    color: 'blue',
  },
  newProd: {
    fontSize: 10,
  },
  prodTitle: {
    fontSize: 21,
  },
  subTitle: {
    fontSize: 16,
  },
  recentAdd: {
    fontSize: 15,
    paddingLeft: 10,
  },
  seeAll: {
    fontSize: 11,
    textAlign: 'right',
    fontWeight: 'normal',
  },
  rA: {
    width: 75,
    height: 80,
    paddingBottom: 1,
  },
  rat: {
    fontSize: 16,
  },
  rast: {
    fontSize: 14,
    color: 'dimgrey',
  },
  copy: {
    color: 'blue',
    fontSize: 8,
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold'
  },
  views: {
    color: 'blue',
    backgroundColor: 'whitesmoke',
    textAlign: 'right',
    fontWeight: 'bold',
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    marginTop: 560,
    backgroundColor: 'whitesmoke',
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },

  all: {
    marginLeft: 20,
  },
  header: {
    fontSize: 25,
  },
  bold: {
    fontWeight: 'bold',
  },
  hash: {
    fontSize: 10,
  },
  gray: {
    color: 'dimgray',
  },
  blue: {
    color: 'blue',
  },
  newProd: {
    fontSize: 10,
  },
  prodTitle: {
    fontSize: 20
  },
  subTitle: {
    fontSize: 16,
  },
  recentAdd: {
    fontSize: 22,
    paddingLeft: 10,
  },
  seeAll: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  rA: {
    width: 80,
    height: 80,
    paddingBottom: 1,
  },
  rat: {
    fontSize: 16,
  },
  rast: {
    fontSize: 14,
    color: 'dimgrey',
  },
  copy: {
    color: 'blue',
    fontSize: 8,
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold'
  },
  views: {
    color: 'blue',
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold',
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    marginTop: 560,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    fontSize: 16,
  },
  header: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    color: '#8E8B93',
  },
  transfer: {
    color: '#4F66EE',
    fontSize: 18,
    backgroundColor: 'whitesmoke',
  },
  more: {
    color: '#4467DA',
    fontSize: 12,
  },
  Blue: {
    color: '#4467DA'
  },
  BlockInfo: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  Hash: {
    fontSize: 12,
    fontFamily: 'Apple SD Gothic Neo',
    color: 'grey'
  },
  TopText: {
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: '#E9E4F1',
  },
  BottemText: {
    fontSize: 12,
    backgroundColor: '#E9E4F1',
    shadowColor: 'black',

  },
  All: {
    marginLeft: 20
  },
  greyText: {
    backgroundColor: '#E9E4F1',

  },
  date: {
    color: '#8C8794',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 15
  },








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


export default connect(mapStateToProps)(ProdPage);
