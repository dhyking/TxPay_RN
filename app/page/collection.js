/**
 * Created by dhy on 2017/1/6.
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
import PayPage from './pay'
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class CollectionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountWeiXin: 0.43,
            amountAliPay: 423432.32,
            amountYzf: 5343.12,
            amountBd: 0.43,
            amountAll: 0.54,
        };
    }

    clickItem(payMethod) {
        console.log('payMethod:' + payMethod)
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'pay',
                component: PayPage,
                params: {
                    payMethod: payMethod
                }
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.img_container,{position:'absolute',top: 0,left: 0}]}>
                    <Image
                        style={styles.img_bg}
                        source={require('../img/collection/main_home_bg.png')}></Image>
                </View>

                <View >
                    <View style={styles.top_container}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image style={styles.logo} source={require('../img/collection/main_icon_logo.png')}/>
                        </View>
                        <View
                            style={[{justifyContent:'flex-end',flexDirection:'row'},{position: 'absolute',right: 15,bottom:10}]}>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Image style={styles.shift} source={require('../img/collection/icon_shift.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Image style={styles.analyse}
                                       source={require('../img/collection/main_icon_analyse.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.text_container}>
                        <Text style={styles.text_show_big}>{this.state.amountAll}</Text>
                        <Text style={styles.text_show_big}>当日收款(元)</Text>
                    </View>

                    <View style={styles.text_container_small}>
                        <View style={styles.text_container_inner}>
                            <Text style={styles.text_show_small}>微信</Text>
                            <Text style={styles.text_show_small}>{this.state.amountWeiXin}</Text>
                        </View>
                        <View style={styles.text_container_inner}>
                            <Text style={styles.text_show_small}>支付宝</Text>
                            <Text style={styles.text_show_small}>{this.state.amountAliPay}</Text>
                        </View>
                        <View style={styles.text_container_inner}>
                            <Text style={styles.text_show_small}>翼支付</Text>
                            <Text style={styles.text_show_small}>{this.state.amountYzf}</Text>
                        </View>
                        <View style={styles.text_container_inner}>
                            <Text style={styles.text_show_small}>百度钱包</Text>
                            <Text style={styles.text_show_small}>{this.state.amountBd}</Text>
                        </View>
                    </View>

                </View>


                <View style={styles.pay_container}>
                    <View style={styles.pay}>
                        <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}
                                          onPress={this.clickItem.bind(this,1)}>
                            <Image style={styles.pay_img}
                                   source={ require('../img/collection/home_icon_weixin.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}
                                          onPress={this.clickItem.bind(this,2)}>
                            <Image style={styles.pay_img}
                                   source={ require('../img/collection/home_icon_zhifubao.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.pay}>
                        <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}
                                          onPress={this.clickItem.bind(this,3)}>
                            <Image style={styles.pay_img}
                                   source={ require('../img/collection/home_icon_yizf.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}
                                          onPress={this.clickItem.bind(this,4)}>
                            <Image style={styles.pay_img}
                                   source={require('../img/collection/home_icon_baidupay.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
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
        justifyContent: 'center',
        marginTop: 10,
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain'
    },
    shift: {
        width: 25,
        height: 25,
    },
    analyse: {
        width: 25,
        height: 25,
        marginLeft: 10
    },
    submit_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    text_show_big: {
        fontSize: 20,
        color: '#f3d8cd',
        paddingTop: 10
    },
    text_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    text_container_small: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'stretch',
        padding: 5
    },
    text_container_inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_show_small: {
        fontSize: 15,
        color: '#f3d8cd',
    },
    pay_container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10
    },
    pay: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pay_img: {
        resizeMode: 'center',
    }

})