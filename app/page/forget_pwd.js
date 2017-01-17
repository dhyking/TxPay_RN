/**
 * Created by dhy on 2017/1/17.
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
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';
import ResetPwd from './reset_pwd'
export default class ForgetPwd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: '#aaa',
            text: null,
        };
    }

    /**
     * 返回
     * @private
     */
    _back() {
        let {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    /**
     * 发送密码
     */
    sendMessage() {
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'message',
                component:ResetPwd
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tab}>
                    <TouchableOpacity activeOpacity={0.6} onPress={this._back.bind(this)} style={{position:'relative'}}>
                        <Image style={{width:50,height:50,resizeMode:'center'}} source={require('../img/back.png')}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20,color: '#f3d8cd',justifyContent:'center',flex: 1,textAlign: 'center'}}>忘记密码</Text>
                </View>

                <View style={styles.input_container}>
                    <TextInput style={styles.input}
                               underlineColorAndroid={'transparent'}
                               numberOfLines={1}
                               placeholder={'请输入用户名'}
                               onChangeText={(text)=>{
                                        {/*this.setState({*/}
                                           {/*text:text*/}
                                        {/*})*/}
                                        if (text) {
                                            console.log(text)
                                            this.setState({color: '#ff6067'});
                                        } else {
                                            this.setState({color: '#aaa'});
                                        }

                               }}
                    />
                    <TouchableOpacity
                        style={{backgroundColor:this.state.color,justifyContent:'center',height:40,borderWidth:0.5,
                        borderColor:'#f3d8cd',marginTop:25,alignItems:'center',margin:5}}
                        activeOpacity={0.5}
                        onPress={this.sendMessage.bind(this)}
                    >
                        <Text style={{fontSize: 18,color:'#ffffff' }}>获取手机验证码</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tab: {
        height: 50,
        backgroundColor: '#ff6067',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input_container: {
        height: 45,
        margin: 25,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ff6067',
        textAlign: 'auto',
        fontSize: 16,
        textAlignVertical: 'center'

    }

})