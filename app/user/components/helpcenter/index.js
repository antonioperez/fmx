import React from 'react';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { View } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class HelpCenterUI extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <Card title="Help Center?">
          <Text style={[{fontSize:12}]}>
            Need Help? FAQ?
          </Text>
        </Card>
      </View>
    );
  }
}