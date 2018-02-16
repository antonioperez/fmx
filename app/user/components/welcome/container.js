import React from 'react';
import { globalStyles } from '../../style';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

export class Card extends React.Component {

    constructor(props) {
        super(props);
        var data = props.info;
        this.state = {
            info : data
        }
    }

    render() {
        return (
            <View>
                <Text h4 style={[globalStyles.center, globalStyles.whiteText]}>
                    {this.state.info.image}
                </Text>
                {/* <Icon 
                    name={this.state.info.image} 
                    iconStyle={[globalStyles.center, globalStyles.whiteText]}
                    size={100}
                /> */}
                <Text h4 style={[globalStyles.center, globalStyles.whiteText]}>
                    {this.state.info.title}
                </Text>
                <Text style={[globalStyles.center, globalStyles.whiteText]}>
                    {this.state.info.text}
                </Text>
            </View>
        )
    }
}
