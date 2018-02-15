import React from 'react';
import firebase from 'react-native-firebase';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, globalThemes } from '../../style';
import { listenForFirebase } from '../../actions';
import { Card } from './container';
import { 
  Button,
  Text
} from 'react-native-elements';

export default class WelcomeUI extends React.Component {
  constructor(props) {
    super(props);
    this.welcomeRef = firebase.database().ref('welcome');
    this.state = {
      activeCard : {},
      cards: []
    };
    this.populateCards = this.populateCards.bind(this);
  }

  populateCards(data) {
    this.setState(() => {
      return {
        cards: data,
        activeCard: data[0].data
      }
    });
  }

  showNextCard = () => {
    this.setState(() => {
      return {
        activeCard: this.state.cards[1].data
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
        <LinearGradient colors={globalThemes.dark} style={[globalStyles.background, globalStyles.centerContainer]} >
            <Card info = {this.state.activeCard} />
            <Text style={globalStyles.whiteText}>
            </Text>
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
        </LinearGradient>
    );
  }
}