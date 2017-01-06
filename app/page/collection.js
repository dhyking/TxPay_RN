/**
 * Created by dhy on 2017/1/6.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,

} from 'react-native';
import Public from '../util/public'
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class CollectionPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.img_container,{position:'absolute',top: 0,left: 0}]}>
                    <Image
                        style={styles.img_bg}
                        source={require('../img/collection/main_home_bg.png')}></Image>
                </View>
                <View style={styles.top_container}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image style={styles.logo} source={require('../img/collection/main_icon_logo.png')}/>
                    </View>
                    <View style={[{justifyContent:'flex-end',flexDirection:'row'},{position: 'absolute',right: 15,bottom:10}]}>
                        <Image style={styles.shift} source={require('../img/collection/icon_shift.png')}/>
                        <Image style={styles.analyse} source={require('../img/collection/main_icon_analyse.png')}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_bg: {
        resizeMode: 'cover',
        width: ScreenWidth,
        height: ScreenHeight,
    },
    top_container: {
        flexDirection: 'row',
        height: 50,
        justifyContent:'center',
        marginTop:10,
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode:'contain'
    },
    shift: {
        width:25,
        height:25,
    },
    analyse: {
        width:25,
        height:25,
        marginLeft:10
    },
    submit_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
})