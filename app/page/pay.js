/**
 * Created by dhy on 2017/1/9.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity

} from 'react-native';
import Public from '../util/public'
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class PayPage extends Component {
    render() {
        return (
            <View>
                <Text>this is pay page</Text>
            </View>
        )
    }
}