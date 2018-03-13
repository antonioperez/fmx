import React from 'react';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { View, ScrollView } from 'react-native';
import { Text, Card, SearchBar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { RateCard } from '../dashboard/container';

export default class ShopUI extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <SearchBar
            //onChangeText={someMethod}
            //onClearText={someMethod}
            lightTheme
            placeholder='Search Merchants..' 
        />
        <ScrollView>
          <RateCard />
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