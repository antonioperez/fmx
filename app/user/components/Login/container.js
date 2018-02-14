import React from 'react';
import { globalStyles } from '../../style';
import { login, FBLogin } from '../../actions';
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

export class LoginForm extends React.Component {
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
                alert(user.email);
            },
            (error) => {
                // Handle Errors here.
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
            <View>
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
            </View>
        )
    }
}

export class FBLoginButton extends React.Component {
    onLogin = () => {
        FBLogin((user) => {
            alert(user.email);
        },
        (error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    }

    render() {
        return (
            <View >
                <SocialIcon
                    title='Or Sign In With Facebook'
                    button
                    type='facebook'
                    textStyle={{textAlign: 'center'}}
                    onPress={this.onLogin} 
                />
            </View>
        )
    }
}
