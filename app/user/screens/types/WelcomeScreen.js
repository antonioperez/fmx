import React from 'react';
import WelcomeUI from './../../components/welcome';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  goToSignup() {
    this.props.navigator.showModal({
      screen: 'fmx.signup',
      navigatorStyle: {
        navBarHidden: false,
        navBarBackgroundColor: "#000"
      },
    });
  }

  goToLogin() {
    this.props.navigator.showModal({
      screen: 'fmx.login',
      navigatorStyle: {
        navBarHidden: false,
        navBarBackgroundColor: "#000"
      },
    });
  }

  render() {
    return (
      <LinearGradient colors={ACTIVE_THEME} style={globalStyles.background} >
        <WelcomeUI goToLogin ={this.goToLogin.bind(this)} goToSignup ={this.goToSignup.bind(this)} />
      </LinearGradient>
    );
  }
}