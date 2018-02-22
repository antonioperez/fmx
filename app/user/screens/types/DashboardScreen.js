import React from 'react';
import DashboardUI from './../../components/dashboard';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';

export default class DashboardScreen extends React.Component {

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