import React from 'react';
import { globalStyles } from '../../style';
import { View, ScrollView } from 'react-native';
import { Text, Header, Card } from 'react-native-elements';
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
        <Header
          backgroundColor = {"#fff"}
          leftComponent={{ icon: 'menu', color: '#1d0c34' }}
          centerComponent={{ text: 'FMx', style: { color: '#1d0c34' } }}
          rightComponent={{ icon: 'settings', color: '#1d0c34' }}
        />
        <Card title="Welcome back, Antonio">
          <Text style={[{fontSize:12}]}>
            We suggest merchant processors based on your business profile. Easily import your information with Snap n Cap!
          </Text>
        </Card>
        <ScrollView>
          <RateCard />
          <RateCard />
          <RateCard />
          <RateCard />
          <RateCard />

        </ScrollView>
       
      </View>
    );
  }
}