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

} from 'react-native';
import CollectionPage from './collection'
import AccountPage from './account'
import ScanInputPage from './scan'
import NoticePage from './notice'
import MyselfPage from './mine'
import TabNavigator from 'react-native-tab-navigator'
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabIconNormalNames:[require('../img/home/home_collection_normal.png'),require('../img/home/home_account_normal.png'),
                require('../img/home/home_scan_normal.png'),require('../img/home/home_message_normal.png'),require('../img/home/home_mine_normal.png')],
            tabIconSelectNames:[require('../img/home/home_collection_press.png'),require('../img/home/home_account_press.png'),
                require('../img/home/home_scan_normal.png'),require('../img/home/home_message_press.png'),require('../img/home/home_mine_press.png')],
            selectedTab:'collection'

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator
                    tabBarStyle={{borderColor:'#12030F',borderTopWidth:0.2}}
                >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'collection'}
                        renderIcon={() => <Image style={styles.icon} resizeMode={'contain'} source={this.state.tabIconNormalNames[0]} />}
                        renderSelectedIcon={() => <Image style={styles.icon} resizeMode={'contain'} source={this.state.tabIconSelectNames[0]} />}
                        onPress={() => this.setState({ selectedTab: 'collection' })}>
                        <CollectionPage {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'account'}
                        renderIcon={() => <Image style={styles.icon} resizeMode={'contain'} source={this.state.tabIconNormalNames[1]} />}
                        renderSelectedIcon={() => <Image style={styles.icon} resizeMode={'contain'} source={this.state.tabIconSelectNames[1]} />}
                        onPress={() => this.setState({ selectedTab: 'account' })}>
                        <AccountPage {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'scan'}
                        renderIcon={() => <Image style={styles.icon} resizeMode={'contain'} source={this.state.tabIconNormalNames[2]} />}
                        renderSelectedIcon={() => <Image style={styles.icon} resizeMode={'contain'} source={this.state.tabIconSelectNames[2]} />}
                        onPress={() => this.setState({ selectedTab: 'scan' })}>
                        <ScanInputPage {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'notice'}
                        renderIcon={() => <Image style={styles.icon} resizeMode={'contain'} source={this.state.tabIconNormalNames[3]} />}
                        renderSelectedIcon={() => <Image style={styles.icon} resizeMode={'contain'} source={this.state.tabIconSelectNames[3]} />}
                        onPress={() => this.setState({ selectedTab: 'notice' })}>
                        <NoticePage {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'mine'}
                        renderIcon={() => <Image style={styles.icon} resizeMode={'contain'} source={this.state.tabIconNormalNames[4]} />}
                        renderSelectedIcon={() => <Image style={styles.icon} resizeMode={'contain'} source={this.state.tabIconSelectNames[4]} />}
                        onPress={() => this.setState({ selectedTab: 'mine' })}>
                        <MyselfPage {...this.props}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    tabs: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#ddd'
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    tabText:{

    },
    selectedTabText:{

    },
    icon:{
        width:45,
        height:45,

    }

})



