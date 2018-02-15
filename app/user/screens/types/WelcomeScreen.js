import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from './../../style';
import WelcomeCard  from './../../components/welcome';

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  goToNextScreen() {
    this.props.navigator.resetTo({
      screen: 'fmx.login',
      title: 'Pushed Screen'
    });
  }

  render() {
    return (
      <WelcomeCard />
    );
  }
}