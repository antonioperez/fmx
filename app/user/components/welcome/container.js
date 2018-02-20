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
                <Text h2 style={[globalStyles.alignCenter, globalStyles.whiteText]}>
                    {this.state.info.title}
                </Text>
                {<Icon 
                    name={this.state.info.image} 
                    iconStyle={[globalStyles.alignCenter, globalStyles.whiteText]}
                    size={100}
                />}
                {this.state.info.tags.map((data, index) => {
                    var key = new Date().getTime() + index;
                    return (
                        <Text key={key} style={[globalStyles.alignCenter, globalStyles.whiteText]}>
                            {data}
                        </Text>
                    )
                  })}
            </View>
        )
    }
}
