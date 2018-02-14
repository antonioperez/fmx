import React from 'react';
import { globalStyles } from '../../style';
import { login } from '../../actions';
import { FBLoginButton } from './container';

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

export default class LoginUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            pw: '', 
        };
    }
    
  onLogin = () => {
    if (this.state.email && this.state.pw) {
        login(this.state.email, this.state.pw, 
        (user) => {
            this.props.onSucess();
        },
        (error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    } else {
        alert("Email and Password Required!")
    }
  }

  render() {
    return (
      <View style={globalStyles.loginContainer}>
        <Text h4 style={[globalStyles.whiteText,globalStyles.center]}>
            FMx Merchant Portal
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
        <FormLabel labelStyle={globalStyles.whiteText}>Password</FormLabel>
        <FormInput 
            onChangeText={(pw) => this.setState({pw})}
            clearButtonMode='always'
            secureTextEntry={true}
            inputStyle={globalStyles.whiteText}
        />
        <Button 
            buttonStyle={globalStyles.clearButton}
            onPress={this.onLogin} 
            title="Login" 
            accessibilityLabel="Login"
        />
        <FBLoginButton onSucess = {this.props.onSucess}/>
      </View>
    );
  }
}