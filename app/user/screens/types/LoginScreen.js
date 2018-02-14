import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {globalStyles} from './../../style';
import LoginUI  from './../../components/Login';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.lightTheme = ['#6651c1', '#8162cb', '#946ed1'];
    this.darkTheme = ["#000", "#1d0c34"];
    this.state = {
      
    };
  }

  componentDidMount() {
    
  }
  render() {
    return (
      <LinearGradient colors={this.darkTheme} style={globalStyles.background}>
        <LoginUI />
      </LinearGradient>
    );
  }
}