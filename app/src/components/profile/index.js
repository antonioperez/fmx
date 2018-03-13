import React from 'react';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { View } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class ProfileUI extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <Card title="Your Settings">
          <Text style={[{fontSize:12}]}>
            Import Your Profile
          </Text>
          <LinearGradient colors={ACTIVE_THEME} style={{marginTop: 10}} >
              <Button title='Snap n Cap' buttonStyle={{backgroundColor: 'transparent'}} />
          </LinearGradient>
        </Card>
      </View>
    );
  }
}