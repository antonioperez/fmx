import React from 'react';
import DashboardUI from './../../components/dashboard';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';

export default class DashboardScreen extends React.Component {

    // static navigatorButtons = {
    //     rightButtons: [{
    //       title: 'Snap n Cap',
    //       id: 'forgotPassword',
    //       buttonColor: 'white',
    //       buttonFontSize: 14,
    //       buttonFontWeight: '600',
    //     }],
    //     leftButtons: [{
    //       title: 'settings',
    //       id: 'cancel',
    //       buttonColor: 'white',
    //       buttonFontSize: 18,
    //       buttonFontWeight: '800',
    //     }]
    // };
    
    constructor(props) {
        super(props);
        //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }


    render() {
        return (
            <LinearGradient colors={ACTIVE_THEME} style={globalStyles.background} >
                <DashboardUI  />
            </LinearGradient>
        );
    }
}