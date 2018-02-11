import React from 'react';
import { Platform, Image, Text, View } from 'react-native';
import {styles} from './styles/styles';
import firebase from 'react-native-firebase';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends React.Component {
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
      <View style={styles.container}>
        <Image source={require('./assets/RNFirebase512x512.png')} style={[styles.logo]} />
        <Text style={styles.welcome}>
          Welcome the FMx
        </Text>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
        <View style={styles.modules}>
        </View>
      </View>
    );
  }
}


