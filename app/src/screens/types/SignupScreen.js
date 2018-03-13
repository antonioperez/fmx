import React from 'react';
import SignupUI from './../../components/signup';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { goToScreen, showScreenModal, dismissModal } from '../actions';

export default class SignupScreen extends React.Component {

  static navigatorButtons = {
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
      if (event.id == 'cancel') {
        dismissModal(this.props.navigator);
      }
    }
  }

  goToDashboard() {
    goToScreen(this.props.navigator, 'fmx.user');
  }

  render() {
    return (
      <LinearGradient colors={ACTIVE_THEME} style={globalStyles.background} >
        <SignupUI goToDashboard ={this.goToDashboard.bind(this)} />
      </LinearGradient>
    );
  }
}