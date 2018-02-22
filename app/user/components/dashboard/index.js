import React from 'react';
import { globalStyles } from '../../style';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export default class DashboardUI extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View >
        <Text h4 style={[globalStyles.alignCenter, globalStyles.whiteText]}>
            Dashboard Test
        </Text>
        <Text style={[globalStyles.alignCenter, globalStyles.whiteText]}>
          Save time. Save money. Scale Your Business.
        </Text>
      </View>
    );
  }
}