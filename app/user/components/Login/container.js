import React from 'react';
import {styles} from '../../style';
import { login, FBLogin } from '../../actions';
import { View, Image} from 'react-native';
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
            login(this.state.email, this.state.pw);
        } else {
            alert("Email and Password Required!")
        }
    }
    render() {
        return (
            <View>
                <FormLabel labelStyle={styles.whiteText}>Email</FormLabel>
                <FormInput 
                    onChangeText={(email) => this.setState({email})}
                    clearButtonMode='always'
                    inputStyle={styles.whiteText}
                />
                <FormLabel labelStyle={styles.whiteText}>Password</FormLabel>
                <FormInput 
                    onChangeText={(pw) => this.setState({pw})}
                    clearButtonMode='always'
                    secureTextEntry={true}
                    inputStyle={styles.whiteText}
                />
                <Button 
                    buttonStyle={styles.clearButton}
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
        FBLogin();
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
