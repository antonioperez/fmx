
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
      }
});



