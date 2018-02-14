import React from 'react';
import { globalStyles } from '../../style';

import { Platform, View, Image } from 'react-native';
import { Text } from 'react-native-elements';

export default class DashboardUI extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {

  }
  render() {
    return (
      <View style={globalStyles.loginContainer}>
        <Text h4 style={[globalStyles.whiteText,globalStyles.center]}>
            Dashboard Test
        </Text>
        <Text style={[globalStyles.whiteText,globalStyles.center]}>
          Save time. Save money. Scale Your Business.
        </Text>
      </View>
    );
  }
}