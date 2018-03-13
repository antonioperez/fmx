import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, ACTIVE_THEME, ACTIVE_COLOR } from '../../style';
import { View } from 'react-native';
import { Button, Text, Divider, Header, Card, List, ListItem} from 'react-native-elements';
import { signOut } from '../../actions';


export default class MenuUI extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = { 
      };
      this.list = [
        {
          title: 'Dashboard',
          icon: 'home',
          hideChevron: true,
          onPress: "dashboard"
        },
        {
          title: 'My Profile',
          icon: 'account-circle',
          hideChevron: true,
          onPress: "profile"
        },
        {
          title: 'Browse Merchants',
          icon: 'search',
          hideChevron: true,
          onPress: "browse"
        },
        {
          title: 'Messages',
          icon: 'message',
          hideChevron: true,
          onPress: "messages"
        },
        {
          title: 'Settings',
          icon: 'settings',
          hideChevron: true,
          onPress: "settings"
        },
        {
          title: 'Help',
          icon: 'help',
          hideChevron: true,
          onPress: "help"
        },
      ]
  }

  onMenuPress (action) {
    this.props.goToScreen(action);
  }

  signOutAction () {
    signOut(() =>{
      this.props.signOutHandler();
    }, () =>{
      this.props.signOutHandler();
    });
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
                onPress = {() => {this.onMenuPress(item.onPress)}}
              />
            ))
          }
        </List>
        <View style= {{marginTop: 40}}>
          <Button title='Logout' buttonStyle={{backgroundColor: '#fff'}} color={ACTIVE_COLOR} onPress={() => {this.signOutAction()}} />
          <Text style={[{fontSize:12, marginTop: 15}, globalStyles.alignCenter, globalStyles.whiteText]}>
            Copyright 2018 {"\n"} Rose Through Concrete LLC.
          </Text>
        </View>
      </View>
    );
  }
}
