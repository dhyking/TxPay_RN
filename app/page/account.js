/**
 * Created by dhy on 2017/1/6.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ListView,
    NativeModules,


} from 'react-native';
var baseUrl =  'http://pc.tongxingpay.com/order/BatchSearchOrderDetail?';
var preUrl = 'http://wangyi.butterfly.mopaasapp.com/news/api?type=ent&page=1&limit=10';
let billInfo = require('../bill.json');
let news = require('../news.json');
export default class AccountPage extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged:(row1,row2) => row1 != row2,
        });
        this.state={
            dataSource:ds,
            loaded:false,
        };
        console.log('data:'+billInfo.Data.length);
        console.log('data2:'+news.list[0].channelname);
    }

    /**
     * 初始化
     */
    componentDidMount() {
        this.getNative()
        // this.getHeadList()
    }

    getNative() {
        console.log('点击');
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(news.list),
            loaded:true,
        })
    }

    /**
     * 获取新闻数据内容
     */
    getHeadList() {
        fetch(preUrl)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.list);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.list),
                    loaded: true,
                    content: 'he',
                });
            }).catch(function (e) {
            console.warn('异常：' + e);
        })
            .done();

    }

    /**
     * 子选项点击事件
     */
    goToPage(docurl) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'NewDetail',
                component: NewsDetail,
                params:{
                    docurl:docurl,
                    name:'name'
                }

            })
        }
    }

    /**
     * 渲染每行子列表
     * @param item  每个item数据
     * @returns {XML}
     */
    renderMovie(item) {
        return (
            <TouchableOpacity style={styles.container} onPress={this.goToPage.bind(this,item.docurl)}>
                <Image
                    style={styles.image}
                    source={{uri: item.imgurl}}
                />
                <View style={{flexDirection: 'column'}}>
                    <View style={styles.row}>
                        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    </View>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    getBillInfo() {
        fetch(baseUrl,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({

            })
        })
            .then((response) => response.json())
            .then((responseData) =>{
                console.log(responseData);
            })
    }

    /**
     * 账单子选项绑定
     */
    renderBill(bill) {
            <TouchableOpacity style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center',alignItems:'center',color: '#000000'}}>{bill.PayType}</Text>
                    <Text style={{justifyContent:'center',alignItems:'center',color: '#000000'}}>this is item</Text>
                </View>
            </TouchableOpacity>
    }
    render() {
        if (!this.state.loaded) {
            return (
                <View>
                    <Text>this is loading</Text>
                </View>
            )
        }
        return (
                <ListView
                    style={{flex: 1, backgroundColor: '#EDEDED'}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie.bind(this)}/>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})