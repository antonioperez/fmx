import React from 'react';
import { Platform, Image, Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../style';

export default class Login extends React.Component {
  constructor() {
    super();
    // var users = firebase.database().ref('users')
    //   var rooms = users.on("value", function (snapshot) {
    //     snapshot.forEach(function (data) {
    //       alert(data);
    //     });
    // }, function (errorObject) {
    //     alert("The read failed: " + errorObject.code);
    // });
    this.state = {

    };
  }

  componentDidMount() {
    
  }
  render() {
    return (
      <View >
        <Text style={styles.appText}>
          Welcome to FMx
        </Text>
        <Text>
          THIS IS A TEST
        </Text>
      </View>
    );
  }
}


