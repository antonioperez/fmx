import {Navigation} from 'react-native-navigation';
import LoginScreen from './types/LoginScreen';
import WelcomeScreen from './types/WelcomeScreen';
import PWRecoverScreen from './types/PasswordReset';
import SignupScreen from './types/SignupScreen';
import DashboardScreen  from './types/DashboardScreen';



export function registerScreens() {
    
    Navigation.registerComponent('fmx.welcome', () => WelcomeScreen);
    Navigation.registerComponent('fmx.login', () => LoginScreen);
    Navigation.registerComponent('fmx.passwordReset', () => PWRecoverScreen);
    Navigation.registerComponent('fmx.signup', () => SignupScreen);
    Navigation.registerComponent('fmx.dashboard', () => DashboardScreen);

}