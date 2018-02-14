import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {globalStyles} from './../../style';
import LoginUI  from './../../components/login';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.lightTheme = ['#6651c1', '#8162cb', '#946ed1'];
    this.darkTheme = ["#000", "#1d0c34"];
    this.state = {
      
    };
  }

  goToNextScreen() {
    this.props.navigator.push({
      screen: 'fmx.dashboard',
      title: 'Pushed Screen'
    });
  }

  render() {
    return (
      <LinearGradient colors={this.darkTheme} style={globalStyles.background}>
        <LoginUI onSucess = {this.goToNextScreen.bind(this)}/>
      </LinearGradient>
    );
  }
}