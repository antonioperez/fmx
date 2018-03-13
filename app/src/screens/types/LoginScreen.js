import React from 'react';
import {LoginUI} from './../../components/login';
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles, ACTIVE_THEME} from '../../style';
import { goToScreen, dismissModal, showScreenModal } from '../actions';

export default class LoginScreen extends React.Component {

  static navigatorButtons = {
    rightButtons: [{
      title: 'Forgot Password?',
      id: 'forgotPassword',
      buttonColor: 'white',
      buttonFontSize: 14,
      buttonFontWeight: '600',
    }],
    leftButtons: [{
      title: 'X',
      id: 'cancel',
      buttonColor: 'white',
      buttonFontSize: 18,
      buttonFontWeight: '800',
    }]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'forgotPassword') {
        showScreenModal(this.props.navigator, 'fmx.passwordReset');
      }
      if (event.id == 'cancel') {
        dismissModal(this.props.navigator);
      }
    }
  }

  onLogin() {
    goToScreen(this.props.navigator, "fmx.user");
  }

  render() {
    return ( 
      <LinearGradient colors = {ACTIVE_THEME} style = {globalStyles.background} >
        <LoginUI onSucess = {this.onLogin.bind(this)}/> 
      </LinearGradient>
    );
  }
}