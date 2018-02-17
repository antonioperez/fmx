import React from 'react';
import { PasswordRecoverUI } from './../../components/login';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, globalThemes } from '../../style';

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
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
            }
        }
    }

    goToNextScreen() {
        this.props.navigator.dismissModal({
            animationType: 'slide-down'
        });
    }

  render() {
    return (
        <LinearGradient colors={globalThemes.dark} style={globalStyles.background} >
          <PasswordRecoverUI onSucess = {this.goToNextScreen.bind(this)} />
        </LinearGradient>
    );
  }
}