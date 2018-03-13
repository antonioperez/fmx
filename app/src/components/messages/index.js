import React from 'react';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { View } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';

export default class MessagesUI extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <Card title="Your Messages">
          <Text style={[{fontSize:12}]}>
            All people you contacted. or contacted you.
          </Text>
        </Card>
      </View>
    );
  }
}