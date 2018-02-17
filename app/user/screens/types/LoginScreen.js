import React from 'react';
import {LoginUI} from './../../components/login';
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles,globalThemes} from '../../style';

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
    this.state = {

    };
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'forgotPassword') {
        this.props.navigator.showModal({
          screen: 'fmx.passwordReset',
          navigatorStyle: {
            navBarHidden: false,
            navBarBackgroundColor: "#000"
          },
        });
      }
      if (event.id == 'cancel') {
        this.props.navigator.dismissModal({
          animationType: 'slide-down'
        });
      }
    }
  }

  goToNextScreen() {
    this.props.navigator.resetTo({
      screen: 'fmx.welcome',
      title: 'Pushed Screen'
    });
  }

  render() {
    return ( 
      <LinearGradient colors = {globalThemes.dark} style = {globalStyles.background} >
        <LoginUI onSucess = {this.goToNextScreen.bind(this)}/> 
      </LinearGradient>
    );
  }
}