import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, FormLabel, FormInput, FormValidationMessage  } from 'react-native-elements';
import { login, FBLogin } from '../../actions';
import {styles} from '../../style';

export class LoginForm extends React.Component {
    onLogin = () => {
        login();
    }
    render() {
        return (
            <View >
               
                {/* <FormLabel>Email</FormLabel>
                <FormInput />
                <FormValidationMessage>Error message</FormValidationMessage> */}
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
                <Button
                    icon={{name: 'home'}}
                    buttonStyle={styles.clearButton}
                    textStyle={{textAlign: 'center'}}
                    title={`Facebook`}
                />
            </View>
        )
    }
}
