import React from 'react';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { login, register } from '../../actions';
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
            email: '',
            pw: '', 
        };
    }
    
  onSubmit = () => {
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
        alert("Email Required!")
    }
  }

  nextStep = () => {
    this.setState({
      step : this.state.step + 1
    })
  }

  previousStep = () =>{
    this.setState({
      step : this.state.step - 1
    })
  }

  render() {
    return (
      <View style={globalStyles.centerContainer}>
          <Text h4 style={[globalStyles.whiteText,globalStyles.center]}>
              FMx Merchant Signup
          </Text>
          <Text style={[globalStyles.whiteText,globalStyles.center]}>
            Save time. Save money. Scale Your Business.
          </Text>
          <FormLabel labelStyle={globalStyles.whiteText}>Email</FormLabel>
          <FormInput 
              onChangeText={(email) => this.setState({email})}
              clearButtonMode='always'
              inputStyle={globalStyles.whiteText}
          />
          <Button 
              buttonStyle={globalStyles.clearButton}
              onPress={this.onSubmit} 
              title="Register" 
              accessibilityLabel="Register"
          />
      </View>
    );
  }
}