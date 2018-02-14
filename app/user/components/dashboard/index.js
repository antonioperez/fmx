import React from 'react';
import { globalStyles } from '../../style';

import { Platform, View, Image } from 'react-native';
import { Text } from 'react-native-elements';

export default class DashboardUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    
  }
  render() {
    return (
      <View >
        <Text h4 style={[globalStyles.center]}>
            Dashboard Test
        </Text>
        <Text style={[globalStyles.center]}>
          Save time. Save money. Scale Your Business.
        </Text>
      </View>
    );
  }
}