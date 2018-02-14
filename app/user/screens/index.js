import {Navigation} from 'react-native-navigation';
import LoginScreen from './types/LoginScreen';
import DashboardUI  from './../components/dashboard';



export function registerScreens() {
    
    Navigation.registerComponent('fmx.login', () => LoginScreen);
    Navigation.registerComponent('fmx.dashboard', () => DashboardUI);
}