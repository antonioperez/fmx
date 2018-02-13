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
        <Text h4 style={[styles.whiteText,styles.center]}>
            FMx Merchant Portal
        </Text>
        <Text style={[styles.whiteText,styles.center]}>
            Invest Back Into Your Business!
        </Text>
        <LoginForm />
        <FBLoginButton />
      </View>
    );
  }
}


