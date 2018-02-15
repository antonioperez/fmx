import React from 'react';
import WelcomeUI from './../../components/welcome';

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
      <WelcomeUI onSucess={this.goToNextScreen.bind(this)} />
    );
  }
}