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
    this.state = {
      step: 0,
      userInfo : {
        "firstName" : "",
        "lastName" : "",
        "email": "", 
        "password": "",
        "location" : ""
      }      
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
    let currState = this.state;
    currState.userInfo[key] = input;
    this.setState(currState)
  } 

  saveAndContinue = () => {
    this.nextStep();
  }

  renderForm(step) {
    switch (this.state.step) {
      case 0:
        return (<View><InputFieldCard 
                    fieldHandler = {this.saveState}
                    title = "What's your name?"
                    label = "First Name"
                    inputKey = "firstName"
                    keyboardType = "default"/>
            <InputFieldCard fieldHandler = {this.saveState}
                            title = ""
                            label = "Last Name"
                            inputKey = "lastName"
                            keyboardType = "default"/></View>)
      case 1:
        return  <InputFieldCard fieldHandler = {this.saveState} 
                              title = "And your email?" 
                              label = "Email Address" 
                              inputKey = "email" 
                              keyboardType = "default"/>
      case 2:
        return <InputFieldCard fieldHandler = {this.saveState} 
                              title = "What about a password?" 
                              label = "Must be longer than 8 characters!" 
                              inputKey = "password" 
                              keyboardType = "default"/>
      case 3:
      return  <InputFieldCard fieldHandler = {this.saveState} 
                              title = "Where are you located?" 
                              label = "Rates depend on your location!" 
                              inputKey = "location" 
                              keyboardType = "default" />
    }
  }

  render() {
    console.log(this.state);
    return (
      <View style={globalStyles.centerContainer}>
          {this.renderForm(this.state.step)}
          <Button 
              buttonStyle={globalStyles.clearButton}
              onPress={this.saveAndContinue} 
              title="Continue" 
              accessibilityLabel="Continue"
          />
      </View>
    );
  }
}