/**
 * Created by dhy on 2017/1/17.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput,
} from 'react-native';

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Statistics extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bg_container}>
                    <Image style={{flex:1,width:ScreenWidth,height:ScreenHeight}} source={require('../img/analyse/analyse_bg.png')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
    },
    bg_container:{
        flex:1
    }
})