import React from 'react';
import { Platform, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';
import LoginUI  from './user';

export default class App extends React.Component {
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
      <LinearGradient colors={this.darkTheme} style={styles.background}>
        <LoginUI />
      </LinearGradient>
    );
  }
}


