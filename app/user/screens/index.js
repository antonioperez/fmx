import {Navigation} from 'react-native-navigation';
import LoginScreen from './types/LoginScreen';
import WelcomeScreen from './types/WelcomeScreen';
import PWRecoverScreen from './types/PasswordReset';
import SignupScreen from './types/SignupScreen';
import UserScreens  from './types/UserScreens';
import MenuScreen  from './types/MenuScreen';

export function registerScreens() {
    
    Navigation.registerComponent('fmx.welcome', () => WelcomeScreen);
    Navigation.registerComponent('fmx.login', () => LoginScreen);
    Navigation.registerComponent('fmx.passwordReset', () => PWRecoverScreen);
    Navigation.registerComponent('fmx.signup', () => SignupScreen);
    Navigation.registerComponent('fmx.user', () => UserScreens);
    Navigation.registerComponent('fmx.menu', () => MenuScreen);
}