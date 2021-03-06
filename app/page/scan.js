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
    TextInput,
    TouchableWithoutFeedback

} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class ScanInput extends Component {
    constructor(props) {
        super(props);
        this.state={
            submitPress:false
        };
    }
    submit() {
        this.setState({
            submitPress:true
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[{flex:1},{position:'absolute',top: 0,left:0}]}>
                    <Image style={styles.bg}
                           source={require('../img/scan/scan_bg.png')}/>
                </View>

                <View style={{flex:1}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize:20}}>收款</Text>
                        <View>
                            <Text style={{fontSize:20}} numberOfLines={1}>￥</Text>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <View style={styles.bottom_container}>
                            <View style={styles.number_container}>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_one_normal.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_four_normal.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_seven_normal.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_point_normal.png')}/>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_icon_xiala.png')}/>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.number_container}>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_two_normal.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_five_normal.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_eight_normal.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_zero_normal.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={this.submit.bind(this)}
                                                  style={[styles.img_container]}
                                >
                                    <Image style={[styles.img_number,styles.img_scan]} source={
                                       require('../img/scan/scan_icon_bt.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.number_container}>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_three_normal.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_six_normal.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_nine_normal.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_delete_normal.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6}
                                                  style={styles.img_container}
                                >
                                    <Image style={styles.img_number}
                                           source={require('../img/scan/scan_icon_chongzhi.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
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
    bg: {
        resizeMode: 'cover',
        width: ScreenWidth,
        height: ScreenHeight,
    },
    bottom_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        flexDirection: 'row',
    },
    number_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img_number: {
        resizeMode: 'center',
    },
    img_scan:{
        borderRadius:15,
        borderWidth:1,
        borderColor:'#ffffff'
    },
})
