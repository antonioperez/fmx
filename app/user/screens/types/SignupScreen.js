import React from 'react';
import SignupUI from './../../components/signup';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  goToDashboard() {
    this.props.navigator.showModal({
      screen: 'fmx.dashboard',
      navigatorStyle: {
        navBarHidden: false,
        navBarBackgroundColor: "#000"
      },
    });
  }

  render() {
    return (
      <LinearGradient colors={ACTIVE_THEME} style={globalStyles.background} >
        <SignupUI goToDashboard ={this.goToDashboard.bind(this)} />
      </LinearGradient>
    );
  }
}