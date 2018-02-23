import React from 'react';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { View, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { RateCard } from './container';

export default class DashboardUI extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View >
        <Card title="Welcome back!">
          <Text style={[{fontSize:12}]}>
            We suggest merchant processors based on your business profile. Complete your business profile with Snap n Cap!
          </Text>
          <LinearGradient colors={ACTIVE_THEME} style={{marginTop: 10}} >
              <Button title='Snap n Cap' buttonStyle={{backgroundColor: 'transparent'}} />
          </LinearGradient>
        </Card>
        <ScrollView>
          <RateCard />
          <RateCard />
          <RateCard />
        </ScrollView>
      </View>
    );
  }
}