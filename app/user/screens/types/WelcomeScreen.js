import React from 'react';
import WelcomeUI from './../../components/welcome';

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
      <WelcomeUI goToLogin ={this.goToLogin.bind(this)} />
    );
  }
}