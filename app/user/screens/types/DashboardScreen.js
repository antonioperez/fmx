import React from 'react';
import DashboardUI from './../../components/dashboard';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { Text, Header, Icon } from 'react-native-elements';


export default class DashboardScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    toggleMenu = (action) =>{
        this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true, 
            to: action
        });
    }

    menuButton = () => {
        return (
            <Icon
                name='menu'
                color='#1d0c34'
                onPress={() => this.toggleMenu('open')} 
            />
        )
    }

    render() {
        return (
            <LinearGradient colors={ACTIVE_THEME} style={globalStyles.background} >
                <Header
                    backgroundColor = {"#fff"}
                    leftComponent={this.menuButton()}
                    centerComponent={{ text: 'FMx', style: { color: '#1d0c34', fontSize:20 } }}
                />
                <DashboardUI  />
            </LinearGradient>
        );
    }
}