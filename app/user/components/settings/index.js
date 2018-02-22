import React from 'react';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { View, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class SettingsUI extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <Card title="Settings Page">
          <Text style={[{fontSize:12}]}>
            Settings Page
          </Text>
        </Card>
      </View>
    );
  }
}