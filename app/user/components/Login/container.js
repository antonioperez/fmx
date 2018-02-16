import React from 'react';
import { globalStyles } from '../../style';
import { login, FBLogin } from '../../actions';
import { View } from 'react-native';
import { SocialIcon, Icon, Text } from 'react-native-elements';


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


export class PasswordRecoverUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
        };
    }
    
  onSubmit = () => {
    if (this.state.email) {
        resetPassword(this.state.email, 
        (user) => {
            this.props.onSucess();
        },
        (error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    } else {
        alert("Email Required!");
    }
  }

  render() {
    return (
      <View style={globalStyles.centerContainer}>
          <Text h4 style={[globalStyles.whiteText,globalStyles.center]}>
              FMx Password Recovery
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
              title="Reset Password" 
              accessibilityLabel="Reset Password"
          />
      </View>
    );
  }
}
