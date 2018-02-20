import React from 'react';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { login, register } from '../../actions';
import { InputFieldCard, InputOptionsCard } from './container';
import { Platform, View, Image } from 'react-native';
import { 
  Button, 
  FormLabel, 
  FormInput,
  TextInput,
  FormValidationMessage,
  Text,
  SocialIcon
} from 'react-native-elements';

export default class SignupUI extends React.Component {
    constructor(props) {
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.state = {
          step:1,
          test: ""
        };
    }
    
  submit = () => {
    if (this.state.email && this.state.pw) {
        login(this.state.email, this.state.pw, 
        (user) => {
            this.props.goToDashboard();
        },
        (error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    } else {
        alert("Required!")
    }
  }

  nextStep = (input, key) => {
    this.setState({
      step : this.state.step + 1
    })
  }

  previousStep = () =>{
    this.setState({
      step : this.state.step - 1
    })
  }

  saveState = (input, key) => {
    console.log(input);
    console.log(key);
    let currState = this.state;
    currState[key] = input;
    this.setState(currState)
  } 

  saveAndContinue = () => {

  }

  render() {
    console.log(this.state);
    return (
      <View style={globalStyles.centerContainer}>
          <InputFieldCard 
            fieldHandler = {this.saveState}
            title = "Hi"
            label = "hello"
            inputKey = "test"
            keyboardType = "numeric"
          />
          <Button 
              buttonStyle={globalStyles.clearButton}
              onPress={this.nextStep} 
              title="Register" 
              accessibilityLabel="Register"
          />
      </View>
    );
  }
}