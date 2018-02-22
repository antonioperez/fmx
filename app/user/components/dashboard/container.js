import React from 'react';
import { globalStyles, ACTIVE_THEME } from '../../style';
import { View, Image } from 'react-native'
import { Card, Text, ListItem, Button, Rating } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

export class RateCard extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Card title='CHASE MERCHANT SERVICES' >
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Rating
                        type="star"
                        fractions={1}
                        startingValue={3.6}
                        readonly
                        imageSize={20}
                        style={{alignSelf:'center'}}
                    />
                    <Text style={{fontSize:12, marginLeft:10}}>
                        105 REVIEWS
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:10, marginBottom:10}}>
                    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                        <Text style={{fontSize:11}}>
                            Term of Loan
                        </Text>
                        <Text style={{fontSize:12, marginTop:10, fontWeight: "bold"}}>
                            36 Months
                        </Text>
                    </View>
                    <View style={{borderLeftWidth: 1, borderColor: '#1d0c34'}}></View>
                    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                        <Text h4 style={{fontSize:11}}>
                            Rate Estimate
                        </Text>
                        <Text style={{fontSize:12, marginTop:10, fontWeight: "bold"}}>
                            5.99%
                        </Text>
                    </View>
                    <View style={{borderLeftWidth: 1, borderColor: '#1d0c34'}}></View>
                    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                        <Text h4 style={{fontSize:11}}>
                            Monthly Payment {"\n"} Estimate
                        </Text>
                        <Text style={{fontSize:12, fontWeight: "bold"}}>
                            $5000
                        </Text>
                    </View>
                </View>
                <LinearGradient colors={ACTIVE_THEME} >
                    <Button title='SEE DETAILS AND RATES' buttonStyle={{backgroundColor: 'transparent'}} />
                </LinearGradient>
            </Card>
        )
    }
}
