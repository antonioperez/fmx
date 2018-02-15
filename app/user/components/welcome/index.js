import React from 'react';
import { globalStyles, globalThemes } from '../../style';

import { Platform, View, Image } from 'react-native';
import { Text } from 'react-native-elements';

export default class WelcomeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    
  }
  render() {
    return (
        <LinearGradient colors={globalThemes.darkTheme} style={globalStyles.background}>
            <Text h4 style={[globalStyles.center]}>
                {this.props.card.image}
            </Text>
            <Text h4 style={[globalStyles.center]}>
                {this.props.card.title}
            </Text>
            <Text style={[globalStyles.center]}>
                {this.props.card.text}
            </Text>
        </LinearGradient>
    );
  }
}