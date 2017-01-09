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
} from 'react-native';
export default class MyselfPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            src: 'http://www.oschina.net/'
        };
    }
    render() {
        return (
            <View style={styles.container}>
               <Text>this is mine page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F5FCFF',
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
})
