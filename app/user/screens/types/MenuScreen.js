import React from 'react';
import MenuUI from './../../components/menu';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';

export default class MenuScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.goToScreen = this.goToScreen.bind(this);
        this.signOutHandler = this.signOutHandler.bind(this);
    }

    goToScreen (screenName) {
        this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true
        });

        this.props.navigator.handleDeepLink({ 
            screen: screenName
        });
    }

    signOutHandler() {
        console.log("logout");
        this.props.navigator.resetTo({
          screen: 'fmx.welcome',
          navigatorStyle: {
            navBarHidden: true
          },
        });
    }
    
    render() {
        return (
            <LinearGradient colors={ACTIVE_THEME} style={globalStyles.background} >
                <MenuUI goToScreen={this.goToScreen} signOutHandler={this.signOutHandler} />
            </LinearGradient>
        );
    }
}