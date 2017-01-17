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
} from 'react-native';
export default class ResetPwd extends Component {
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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tab}>
                    <TouchableOpacity activeOpacity={0.6} onPress={this._back.bind(this)} style={{position:'relative'}}>
                        <Image style={{width:50,height:50,resizeMode:'center'}} source={require('../img/back.png')}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20,color: '#f3d8cd',justifyContent:'center',flex: 1,textAlign: 'center'}}>忘记密码</Text>
                </View>
                <View >
                    <View style={styles.input_container}>
                        <Image style={{width:40,height:40,resizeMode:'center'}}
                               source={require('../img/mine/myself_icon_about.png')}/>
                        <Text>验证码</Text>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            numberOfLines={1}
                            placeholder={'验证码'}
                            style={styles.input}
                        />
                        <View style={[{width:50,flexDirection:'row'}]}
                        >
                            <Text>重新发送</Text>
                            <Text>获取验证码</Text>
                        </View>

                    </View>

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
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ff6067',
        textAlign: 'auto',
        fontSize: 16,
        textAlignVertical: 'center',
        flex: 1,
        height:30,
        alignSelf:'center'

    }

})