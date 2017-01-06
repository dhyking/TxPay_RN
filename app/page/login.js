/**
 * Created by dhy on 2017/1/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import HomePage from './home';

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked:false,
        };
    }

    /**
     * 记住密码
     */
    checkRememberPwd() {
        this.setState({
            isChecked:!this.state.isChecked,
        })
        console.log('记住密码');
    }

    /**
     * 忘记密码
     */
    forgetPwq() {
        console.log('忘记密码');
    }

    /**
     * 登陆
     */
    loginIn() {
        console.log('登陆');
        const {navigator}= this.props;
        if (navigator) {
            navigator.push({
                name:'home',
                component:HomePage,
            })
        }

    }
    joinUs() {
        console.log('加盟');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.top_bg,{position:'absolute',top: 0,left: 0}]}>
                    <Image
                        style={styles.bg}
                        source={require('../img/login/login_icon_bg.png')}></Image>
                </View>
                <View style={styles.logo_header}>
                    <Image
                        style={styles.img_logo}
                        source={require('../img/login/login_icon_logo.png')}/>
                </View>
                <View style={[styles.center_view,{position:'relative'}]}>
                    <View style={styles.input_container}>
                        <View style={styles.input_view}>
                            <Image style={styles.img} source={require('../img/login/login_icon_acount.png')}/>
                            <TextInput style={styles.input_text} underlineColorAndroid={'transparent'} numberOfLines={1}
                                       maxLength={16}
                                       placeholder={'账户'} placeholderTextColor={'#ffdad3'}/>
                        </View>
                        <Text style={styles.line}/>
                    </View>
                    <View style={styles.input_container}>
                        <View style={styles.input_view}>
                            <Image style={styles.img} source={require('../img/login/login_icon_password.png')}/>
                            <TextInput style={styles.input_text} underlineColorAndroid={'transparent'}
                                       maxLength={12}
                                       secureTextEntry={true} numberOfLines={1} placeholder={'密码'}
                                       placeholderTextColor={'#ffdad3'}/>
                        </View>
                        <Text style={styles.line}/>
                    </View>
                </View>
                <View style={styles.forget_container}>
                    <TouchableWithoutFeedback onPress={this.checkRememberPwd.bind(this)}>
                    <Image style={{width:20,height:20}} source={this.state.isChecked ?
                    require('../img/login/iconfont_kuang_change.png'):require('../img/login/iconfont_kuang.png')}/>
                    </TouchableWithoutFeedback>
                    <Text style={styles.text_forget}>记住密码</Text>
                    <TouchableOpacity style={{marginLeft:20}} onPress={this.forgetPwq.bind(this)}>
                        <Text style={styles.text_forget}>忘记密码?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.submit_container} onPress={this.loginIn.bind(this)}>
                    <Image style={{width:200,height:30,borderRadius:20}}
                           source={require('../img/login/login_icon_register.png')}/>
                </TouchableOpacity>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:60}}>
                    <Text style={styles.text_no}>没有账号</Text>
                </View>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginTop:15}} onPress={this.joinUs.bind(this)}>
                    <Image style={{width:100,height:30,borderRadius:15,borderWidth:1,borderColor:'#E5A89E'}}
                           source={require('../img/login/login_icon_jm.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top_bg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bg: {
        resizeMode: 'cover',
        width: ScreenWidth,
        height: ScreenHeight,
    },
    logo_header: {
        justifyContent: 'center',
        marginTop: 100,
        alignItems: 'center',
    },
    img_logo: {
        width: 200,
        height: 80,
        resizeMode: 'contain',
    },
    center_view: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop:20,
    },
    input_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 30,
        height: 30,
    },
    input_text: {
        fontSize: 20,
        color: '#ffdad3',
        textAlign: 'left',
        width: 150,
        marginLeft: 5,
        marginTop: 5,
    },
    line: {
        marginTop: -5,
        backgroundColor: '#ffdad3',
        width: 200,
        height: 1,
    },
    forget_container: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    text_forget: {
        fontSize: 18,
        color: '#ffdad3',
        marginLeft:3,
    },
    submit_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    text_submit: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    text_no: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#666666',
    },
    text_add: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
    }


})