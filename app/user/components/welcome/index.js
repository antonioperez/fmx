import React from 'react';
import firebase from 'react-native-firebase';
import Swiper from 'react-native-swiper';
import { ScrollView, View } from 'react-native';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { listenForFirebase } from '../../actions';
import { 
  Button,
  Text
} from 'react-native-elements';
import { Card } from './container';

export default class WelcomeUI extends React.Component {
  constructor(props) {
    super(props);
    this.welcomeRef = firebase.database().ref('welcome');
    this.state = {
      cards: []
    };
    this.populateCards = this.populateCards.bind(this);
  }

  populateCards(data) {
    this.setState(() => {
      return {
        cards: data
      }
    });
  }

  componentDidMount() {
      let _this = this;
      listenForFirebase(this.welcomeRef, (data) => {
        _this.populateCards(data);
      });
  }

  render() {
    return (
      <View style={globalStyles.centerContainer}>
        <Swiper autoplay={true}
              dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 5, height: 5, borderRadius: 7, marginLeft: 4, marginRight: 4}} />}
              activeDot={<View style={{backgroundColor: '#fff', width: 5, height: 5, borderRadius: 7, marginLeft: 4, marginRight: 4}} />}
        >
            {this.state.cards.map(data => {
              return (
                <Card info={data.data} key={data._key} />
              )
            })} 
        </Swiper>
        <Button 
          buttonStyle={globalStyles.clearButton}
          title="Sign up" 
          onPress={this.props.goToSignup}
          accessibilityLabel="Sign up"
        />
        <Button 
          buttonStyle={globalStyles.clearButton}
          title="Login" 
          onPress={this.props.goToLogin} 
          accessibilityLabel="Login"
        />
      </View>
    );
  }
}