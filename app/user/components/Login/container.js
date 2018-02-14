import React from 'react';
import { globalStyles } from '../../style';
import { login, FBLogin } from '../../actions';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';


export class FBLoginButton extends React.Component {

    constructor(props) {
        super(props);
    }
    
    onLogin = () => {
        FBLogin((user) => {    
            this.props.onSucess();
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
