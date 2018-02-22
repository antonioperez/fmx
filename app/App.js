
import { Navigation } from 'react-native-navigation';
import registerScreens from './user';

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: 'fmx.dashboard',
        title: '',
        navigatorStyle: {
            navBarHidden: true
        },
        navigatorButtons: {},
    },
    drawer : {
        left: {
            screen: 'fmx.menu', 
            passProps: {}, 
            disableOpenGesture: false, 
            fixedWidth: 500 
        },
    }
});



