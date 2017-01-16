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
    WebView,
    ScrollView,
    RefreshControl
} from 'react-native';

// 图片
var IMAGES = [
    require('../img/mine/myself_icon_remain.png'),
    require('../img/mine/myself_icon_search.png'),
    require('../img/mine/myself_icon_card.png'),
    require('../img/mine/myself_icon_rate.png'),
    require('../img/mine/myself_icon_bluetooth.png'),
    require('../img/mine/myself_icon_print.png'),
    require('../img/mine/myself_icon_about.png'),
    require('../img/mine/myself_icon_password.png'),
    require('../img/mine/myself_icon_password.png'),
];

// 名字
var NAMES = [
    '账户余额',
    '到账查询',
    '银行卡',
    '周期与费率',
    '蓝牙设置',
    '打印机设置',
    '关于',
    '设置管理员密码',
    '设置退款密码',
];

var SHOW_ITEM = [true, true, true, true, true, true, true, true, true, true, true];

export default class MyselfPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: 'http://www.oschina.net/',
            isRefreshing: false,
            merchantNo: '1100',
            limit: '无权限',
            isSuper:false,
        };
    }

    /**
     *刷新时用
     * @private
     */
    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({isRefreshing: false});
        }, 2000);
    }

    /**
     *  子选项布局
     * @param image 图片
     * @param i 选择的子选项的下标
     * @returns {*}
     * @private
     */
    _itemShow(image, i) {
        var text = NAMES[i];
        var showItem = SHOW_ITEM[i];
        if (!showItem) {
            return null;
        }
        if (!this.state.isSuper) {
            if( i< 4 ) {
                return null;
            }
        }
        return (
            <TouchableOpacity activeOpacity={0.6}
                              style={styles.item_container}
                              key={i}
            >
                    <Image style={{width:50,height:50,resizeMode:'center'}} source={image}/>
                    <Text>{text}</Text>
                    <Image style={[{width:50,height:50,resizeMode:'center'},{position:'absolute',right:0}]}
                           source={require('../img/mine/myself_icon_direct.png')}/>
            </TouchableOpacity>

        );


    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}
                            refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
                >
                    <View >
                        <View style={{flexDirection:'row',height: 30,alignItems:'center',padding:5}}>
                            <Text style={styles.text_head}>登录名:</Text>
                            <Text style={styles.text_head}>145345435</Text>
                        </View>
                        <View style={styles.item_container}>
                            <Image style={{width:50,height:50,resizeMode:'center',alignSelf:'flex-start'}}
                                   source={require('../img/mine/myself_icon_merchanno.png')}/>
                            <Text>商户号</Text>
                            <Text style={[{position:'absolute',bottom:10,right:10},styles.horizon_center]}>{this.state.merchantNo}</Text>
                        </View>
                        <View style={styles.item_container}>
                            <Image style={{width:50,height:50,resizeMode:'center'}}
                                   source={require('../img/mine/myself_icon_limit.png')}/>
                            <Text>商户权限</Text>
                            <Text
                                style={[{position:'absolute',bottom:10,right:10},styles.horizon_center]}>{this.state.limit}</Text>
                        </View>
                    </View>
                    {IMAGES.map(this._itemShow.bind(this))}
                </ScrollView>
                <View style={[styles.bottom_container]}>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Text style={styles.switch_content}>切换账号</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'

    },
    text_head: {
        fontSize: 14,
    },
    scroll: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        marginBottom:10
    },
    text_submit: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    bottom_container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 5,
        height: 40,
        marginTop:10,
    },
    switch_content: {
        fontSize: 18,
        color: '#e8392d',
    },
    item_container: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        marginTop: 1,
        paddingRight: 10,
    },
    no_arrow: {
        flexDirection: 'column',
    },
    horizon_center: {
        alignItems: 'center'
    }

})
