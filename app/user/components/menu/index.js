import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME, ACTIVE_COLOR } from '../../style';
import { View } from 'react-native';
import { Button, Text, Divider, Header, Card, List, ListItem} from 'react-native-elements';

export default class MenuUI extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = { 
      };
      this.list = [
        {
          title: 'Dashboard',
          icon: 'home',
          hideChevron: true
        },
        {
          title: 'My Profile',
          icon: 'account-circle',
          hideChevron: true
        },
        {
          title: 'Browse Merchants',
          icon: 'search',
          hideChevron: true
        },
        {
          title: 'Settings',
          icon: 'settings',
          hideChevron: true
        },
        {
          title: 'Help',
          icon: 'help',
          hideChevron: true
        },
      ]
  }
    
  render() {
    return (
      <View >
        <Header
            backgroundColor = {"#fff"}
            centerComponent={{ text: 'FMx', style: { color: '#1d0c34' } }}
        />
        <List style={[{marginTop: 5}]}>
          {
            this.list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon, color: ACTIVE_COLOR}}
                hideChevron={item.hideChevron}
              />
            ))
          }
        </List>
        <View style= {{marginTop: 40}}>
          <Button title='Logout' buttonStyle={{backgroundColor: '#fff'}} color={ACTIVE_COLOR} />
          <Text style={[{fontSize:12, marginTop: 15}, globalStyles.alignCenter, globalStyles.whiteText]}>
            Copyright 2018 {"\n"} Rose Through Concrete LLC.
          </Text>
        </View>
      </View>
    );
  }
}
