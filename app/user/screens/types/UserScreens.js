import React from 'react';
import DashboardUI from './../../components/dashboard';
import ShopUI from './../../components/shop';
import ProfileUI from './../../components/profile';
import SettingsUI from './../../components/settings';
import HelpCenterUI from './../../components/helpcenter';
import MessagesUI from './../../components/messages';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { Text, Header, Icon } from 'react-native-elements';
import { goToScreen, toggleSideBar } from '../actions';

export default class UserScreens extends React.Component {

    // static navigatorButtons = {
    //     leftButtons: [{
    //       title: 'X',
    //       id: 'sideBar',
    //       buttonColor: 'red',
    //       buttonFontSize: 18,
    //       buttonFontWeight: '800',
    //     }]
    //   };
      

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            activeScreen : "dashboard"
        }

    }

    componentDidMount() {
        
    }

    toggleMenu(action) {
        toggleSideBar(this.props.navigator);
    }

    onNavigatorEvent(event) {
        console.log(event);
        if (event.type == 'DeepLink') {
            toggleSideBar(this.props.navigator);
            const link = event.link
            const screen = event.payload;
            if (link == 'user') {
                this.setState({
                    activeScreen : screen
                })
            } 
            if (link == 'signout'){
                goToScreen(this.props.navigator, "fmx.welcome");
            }
         }

        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'sideBar') {
                console.log("test");
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true
                });
            }
        }
      }

    menuButton(){
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
            case "messages":
                return <MessagesUI />
            case "settings":
                return <SettingsUI  />
            case "help":
                return <HelpCenterUI  />
            
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