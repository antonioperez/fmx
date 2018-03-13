
import { Navigation } from 'react-native-navigation';
import registerScreens from './src';

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: 'fmx.user',
        title: '',
        navigatorStyle: {
            navBarHidden: true
        },
        navigatorButtons: {},
    },
    drawer : {
        left: {
            screen: 'fmx.menu',
            disableOpenGesture: false, 
            fixedWidth: 500 
        },
    }
});



