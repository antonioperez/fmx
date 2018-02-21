import React from 'react';
import {globalStyles} from '../../style';
import { View, Image } from 'react-native';
import { 
  Button, 
  FormLabel, 
  FormInput,
  FormValidationMessage,
  Text,
} from 'react-native-elements';

export class InputFieldCard extends React.Component {

    constructor(props) {
        super(props);
        this.key = this.props.inputKey;
    }

    onFieldChange(input, key) {
        this.props.fieldHandler(input, key);
    }

    render() {
        return (
          <View key = {this.props.inputKey}>
                <Text h4 style={[globalStyles.whiteText, globalStyles.alignLeft]}>
                  {this.props.title}
                </Text>
                <FormLabel labelStyle={globalStyles.whiteText}>
                    {this.props.label}
                </FormLabel>
                <FormInput
                    onChangeText={(input) => this.onFieldChange(input, this.props.inputKey)}
                    clearButtonMode='always'
                    inputStyle={globalStyles.whiteText}
                    keyboardType = {this.props.keyboardType}
                />
          </View>
        );
      }
}

// export class InputOptionsCard extends React.Component {

//     constructor(props) {
//         super(props);
//     }
    
//     render() {
//         return (
//             <View style={globalStyles.centerContainer}>
//                 <Text h4 style={[globalStyles.whiteText,globalStyles.alignCenter]}>
//                     {this.props.title}
//                 </Text>
//                 <FormLabel 
//                     labelStyle={globalStyles.whiteText}
//                     onChangeText={(email) => this.props.nextStep({email})}
//                 >{this.props.label}</FormLabel>
//                 <FormInput 
//                     onSubmit={this.props.onSubmit}
//                     clearButtonMode='always'
//                     inputStyle={globalStyles.whiteText}
//                 />
//             </View>
//         );
//       }
// }