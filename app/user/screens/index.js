import {Navigation} from 'react-native-navigation';
import LoginScreen from './types/LoginScreen';
import WelcomeScreen from './types/WelcomeScreen';
import PWRecoverScreen from './types/PasswordReset';
import DashboardUI  from './../components/dashboard';



export function registerScreens() {
    
    Navigation.registerComponent('fmx.login', () => LoginScreen);
    Navigation.registerComponent('fmx.dashboard', () => DashboardUI);
    Navigation.registerComponent('fmx.welcome', () => WelcomeScreen);
    Navigation.registerComponent('fmx.passwordReset', () => PWRecoverScreen);
}