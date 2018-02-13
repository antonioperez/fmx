import React from 'react';
import {styles} from '../../style';
import {LoginForm, FBLoginButton} from './container';

import { Platform, View, Image } from 'react-native';
import { Text } from 'react-native-elements';

export default class LoginUI extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {

  }
  render() {
    return (
      <View style={styles.loginContainer}>
        {/* <Image source={require('../../.././assets/images/FMx.png')} style={styles.logo} /> */}
        <Text h2 style={[styles.whiteText,styles.center]}>
            FMx
        </Text>
        <Text h4 style={[styles.whiteText,styles.center]}>
            Merchant Portal
        </Text>
        <LoginForm />
        <FBLoginButton />
      </View>
    );
  }
}


