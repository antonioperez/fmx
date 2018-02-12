import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import { login } from '../../actions';

export default class LoginButton extends React.Component {
    onLogin = () => {
        login();
    }
    render() {
        return (
            <Button onPress={this.onLogin} title="Login" accessibilityLabel="Login">
                <Text>Start Chatting</Text>
            </Button>
        )
    }
}
