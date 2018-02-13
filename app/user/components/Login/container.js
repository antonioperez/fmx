import React, { Component } from 'react';
import { login, FBLogin } from '../../actions';
import {styles} from '../../style';
import { View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    onLogin = () => {
        login("aperez2541@outlook.com", "reaper123");
    }
    render() {
        return (
            <View>
                <FormLabel labelStyle={styles.whiteText}>Email</FormLabel>
                <FormInput />
                <FormLabel labelStyle={styles.whiteText}>Password</FormLabel>
                <FormInput />
                <FormValidationMessage>Error message</FormValidationMessage>
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
