import React from 'react';
import { PasswordRecoverUI } from './../../components/login';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { dismissModal } from '../actions';

export default class PWRecoverScreen extends React.Component {

    static navigatorButtons = {
        leftButtons: [
            {
                title: 'X',
                id: 'cancel',
                buttonColor: 'white',
                buttonFontSize: 18,
                buttonFontWeight: '800',
            }
        ]
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'cancel') {
                dismissModal(this.props.navigator);
            }
        }
    }

    goToNextScreen() {
        dismissModal(this.props.navigator);
    }

  render() {
    return (
        <LinearGradient colors={ACTIVE_THEME} style={globalStyles.background} >
          <PasswordRecoverUI onSucess = {this.goToNextScreen.bind(this)} />
        </LinearGradient>
    );
  }
}