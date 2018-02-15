import React from 'react';
import { globalStyles } from '../../style';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export class Card extends React.Component {

    constructor(props) {
        super(props);
        this.data = props.card 
        this.state = {
            info : {
                title : "",
                image : "",
                text : ""
            }
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({info: newProps.info});
    }
    
    render() {

        return (
            <View >
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
