import React from 'react';
import firebase from 'react-native-firebase';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { register, updateFirebaseData } from '../../actions';
import { InputFieldCard, InputOptionsCard } from './container';
import { View } from 'react-native';
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
    this.userRef = null;
    this.user = null;
    
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

  updateUser = () => {
    if (this.userRef) {
      updateFirebaseData(this.userRef, this.state.userInfo, () => {
        
      });
    }
  }

  saveAndContinue = () => {
    if (this.state.userInfo.email && this.state.userInfo.password) {
      register(this.state.userInfo.email, this.state.userInfo.password, 
        (user) => {
            delete this.state.userInfo.email;
            delete this.state.userInfo.password; 
            this.user = user;
            this.userRef = firebase.database().ref('users').child(user.uid);
            this.nextStep();
        },
        (error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    } else {
      this.nextStep();
      this.updateUser();
    }
  }

  renderButtons() {
    if (this.state.step >= 1 && this.state.step != 2){
      return (
        <View style={globalStyles.row}>
            <Button
                style = {{alignSelf: "flex-start"}}
                buttonStyle={[globalStyles.clearButton, globalStyles.buttonCircle]}
                onPress={this.previousStep} 
                icon={{name: 'chevron-left', size: 35}}
                accessibilityLabel="Go Back"
            />
            <Button
                style = {{alignSelf: "flex-end"}}
                buttonStyle={[globalStyles.clearButton, globalStyles.buttonCircle]}
                onPress={this.saveAndContinue} 
                icon={{name: 'chevron-right', size: 35}}
                accessibilityLabel="Continue"
                
            />
        </View>)
    } else {
      return (<Button
          style = {{alignSelf: "flex-end"}}
          buttonStyle={[globalStyles.clearButton, globalStyles.buttonCircle]}
          onPress={this.saveAndContinue} 
          icon={{name: 'chevron-right', size: 35}}
          accessibilityLabel="Continue" />)
    }
  }

  renderForm(step) {
    switch (this.state.step) {
      case 0:
        return  <InputFieldCard fieldHandler = {this.saveState} 
                              title = "What's your email?" 
                              label = "Email Address" 
                              inputKey = "email" 
                              keyboardType = "default"/>
      case 1:
        return <InputFieldCard fieldHandler = {this.saveState} 
                              title = "What about a password?" 
                              label = "Must be longer than 8 characters!" 
                              inputKey = "password" 
                              keyboardType = "default"/>
      case 2:
      return (<View>
                <Text h3 style={[globalStyles.whiteText, globalStyles.alignLeft]}>
                  Welcome to FMx!
                </Text>
                <Text style={[globalStyles.whiteText, globalStyles.alignLeft]}>
                  You're account has been created!
                </Text>
                <Text style={[globalStyles.whiteText, globalStyles.alignLeft]}>
                  Now, lets fill in some information!
                </Text>

              </View>)
      case 3:
        return (<View><InputFieldCard 
                    fieldHandler = {this.saveState}
                    title = "And what's your name?"
                    label = "First Name"
                    inputKey = "firstName"
                    keyboardType = "default"/>
            <InputFieldCard fieldHandler = {this.saveState}
                            title = ""
                            label = "Last Name"
                            inputKey = "lastName"
                            keyboardType = "default"/></View>)
      case 4:
        return  <InputFieldCard fieldHandler = {this.saveState} 
                              title = "Where are you located?" 
                              label = "Rates depend on your location!" 
                              inputKey = "location" 
                              keyboardType = "default" />
      case 5:
          this.props.goToDashboard();
    }
  }

  render() {
 
    return (
      <View style={globalStyles.centerContainer}>
          {this.renderForm(this.state.step)}
          {this.renderButtons()}
      </View>
    );
  }
}