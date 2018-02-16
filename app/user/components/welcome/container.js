import React from 'react';
import { globalStyles } from '../../style';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { welcomeStyle } from './style';

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
            <View style={welcomeStyle.centerSlider}>
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
                {this.state.info.tags.map((data, index) => {
                    var key = new Date().getTime() + index;
                    return (
                        <Text key={key} style={[globalStyles.center, globalStyles.whiteText]}>
                            {data}
                        </Text>
                    )
                  })}
            </View>
        )
    }
}
