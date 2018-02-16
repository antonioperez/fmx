import React from 'react';
import WelcomeUI from './../../components/welcome';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, globalThemes } from '../../style';

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
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
      <LinearGradient colors={globalThemes.dark} style={globalStyles.background} >
        <WelcomeUI goToLogin ={this.goToLogin.bind(this)} />
      </LinearGradient>
    );
  }
}