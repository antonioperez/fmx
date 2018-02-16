import React from 'react';
import firebase from 'react-native-firebase';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Card } from './container';

import { globalStyles, globalThemes } from '../../style';
import { listenForFirebase } from '../../actions';

import { 
  Button,
  Text
} from 'react-native-elements';

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
        <LinearGradient colors={globalThemes.dark} style={[globalStyles.background]} >
            <View style={globalStyles.centerContainer}>
              <Swiper autoplay={true} >
                  {this.state.cards.map(data => {
                    return (
                      <Card info={data.data} key={data._key} />
                    )
                  })} 
              </Swiper>
              <Button 
                buttonStyle={globalStyles.clearButton}
                title="Sign up" 
                accessibilityLabel="Sign up"
              />
              <Button 
                buttonStyle={globalStyles.clearButton}
                title="Login" 
                onPress={this.props.goToLogin} 
                accessibilityLabel="Login"
              />
            </View>
        </LinearGradient>
    );
  }
}