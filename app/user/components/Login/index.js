import React from 'react';
import { globalStyles } from '../../style';
import { LoginForm, FBLoginButton } from './container';

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
      <View style={globalStyles.loginContainer}>
        <Text h4 style={[globalStyles.whiteText,globalStyles.center]}>
            FMx Merchant Portal
        </Text>
        <Text style={[globalStyles.whiteText,globalStyles.center]}>
          Save time. Save money. Scale Your Business.
        </Text>
        <LoginForm />
        <FBLoginButton />
      </View>
    );
  }
}