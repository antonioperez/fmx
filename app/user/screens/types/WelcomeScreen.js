import React from 'react';
import WelcomeUI from './../../components/welcome';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { showScreenModal, dismissModal, goToScreen } from '../actions';

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  goToSignup() {
    showScreenModal(this.props.navigator, 'fmx.signup');
  }

  goToLogin() {
    showScreenModal(this.props.navigator, 'fmx.login');
  }

  render() {
    return (
      <LinearGradient colors={ACTIVE_THEME} style={globalStyles.background} >
        <WelcomeUI goToLogin ={this.goToLogin.bind(this)} goToSignup ={this.goToSignup.bind(this)} />
      </LinearGradient>
    );
  }
}