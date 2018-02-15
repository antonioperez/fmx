import React from 'react';
import LoginUI  from './../../components/login';
import { View } from 'react-native';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  goToNextScreen() {
    this.props.navigator.resetTo({
      screen: 'fmx.welcome',
      title: 'Pushed Screen'
    });
  }

  render() {
    return (
        <View>
          <LoginUI onSucess = {this.goToNextScreen.bind(this)} />
        </View>
    );
  }
}