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
    showScreenModal(this.props.navigator, 'fmx.user');
  }

  render() {
    return (
      <LinearGradient colors={ACTIVE_THEME} style={globalStyles.background} >
        <SignupUI goToDashboard ={this.goToDashboard.bind(this)} />
      </LinearGradient>
    );
  }
}