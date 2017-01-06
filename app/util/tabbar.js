/**
 * Created by dhy on 2017/1/6.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        tabIconSelectNames: React.PropTypes.any,
        tabIconNormalNames: React.PropTypes.any,
        isFastStart: React.PropTypes.bool,
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,

    }

    /**
     * 子tab
     * @param tab
     * @param i
     * @private
     */
    _renderTab(i) {
        var tabIcon = this.props.activeTab == i ? this.props.tabIconSelectNames[i] : this.props.tabIconNormalNames[i];
        <TouchableOpacity
            style={styles.tab}
            onPress={this.props.goToPage(i)}
            key={i}
        >
            <Image source={tabIcon} style={{width:25,height:25}}/>
        </TouchableOpacity>
    }

    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((i) => this._renderTab(i))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tab: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
})
