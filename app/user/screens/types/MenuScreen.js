import React from 'react';
import MenuUI from './../../components/menu';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME } from '../../style';

export default class MenuScreen extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LinearGradient colors={ACTIVE_THEME} style={globalStyles.background} >
                <MenuUI  />
            </LinearGradient>
        );
    }
}