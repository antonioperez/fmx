import React from 'react';
import DashboardUI from './../../components/dashboard';
import ShopUI from './../../components/shop';
import ProfileUI from './../../components/profile';
import SettingsUI from './../../components/settings';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { Text, Header, Icon } from 'react-native-elements';

export default class UserScreens extends React.Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.state = {
            activeScreen : "dashboard"
        }

    }

    toggleMenu = (action) =>{
        this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true, 
            to: action
        });
    }

    onNavigatorEvent(event) {

        if (event.type == 'DeepLink') {
            const screen = event.screen;
            console.log(screen);
            this.setState({
                activeScreen : screen
            })
            
         }
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

    renderScreen(screen) {
        switch (screen) {
            case "dashboard":
                return <DashboardUI  />
            case "browse":
                return <ShopUI  />
            case "profile":
                return <ProfileUI  />
            case "settings":
                return <SettingsUI  />
            case "help":
                return <SettingsUI  />
            
        }
        
    }

    render() {
        return (
            <LinearGradient colors={ACTIVE_THEME} style={globalStyles.background} >
                <Header
                    backgroundColor = {"#fff"}
                    leftComponent={this.menuButton()}
                    centerComponent={{ text: 'FMx', style: { color: '#1d0c34', fontSize:20 } }}
                />
            {this.renderScreen(this.state.activeScreen)}
            </LinearGradient>
        );
    }
}