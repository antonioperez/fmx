import React from 'react';
import { Platform, Image, Text, View } from 'react-native';
import {styles} from '../../style';
import {LoginForm, FBLoginButton} from './container';

export default class LoginUI extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    // var users = firebase.database().ref('users')
    //   var rooms = users.on("value", function (snapshot) {
    //     snapshot.forEach(function (data) {
    //       alert(data);
    //     });
    // }, function (errorObject) {
    //     alert("The read failed: " + errorObject.code);
    // });
  }
  render() {
    return (
      <View >
        <Image source={require('../../.././assets/images/FMx.png')} style={[styles.logo]} />
        <Text style={styles.appText}>
          Welcome to FMx {"\n"}
        </Text>
        <LoginForm />
        <FBLoginButton />
      </View>
    );
  }
}


