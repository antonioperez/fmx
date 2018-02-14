import {Navigation} from 'react-native-navigation';
import LoginScreen from './types/LoginScreen';


export function registerScreens() {
    Navigation.registerComponent('fmx.login', () => LoginScreen);
}