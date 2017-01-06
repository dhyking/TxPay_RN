/**
 * Created by dhy on 2017/1/5.
 */
import React,{Component} from 'react'
import {
    Navigator,
    BackAndroid,
    ToastAndroid,
} from 'react-native'
import LoginPage from './page/login'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.onBackAndroid = this.onBackAndroid.bind(this);
    }

    /**
     * 物理返回键的监听
     * @returns {boolean}
     */
    onBackAndroid() {
        let navigator = this.refs.navigator;
        let routers = navigator.getCurrentRoutes();
        console.log('routers:'+routers);
        if (navigator.length > 1) {
            navigator.pop();
            return true;
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.showWithGravity("再按一次退出应用",ToastAndroid.SHORT,ToastAndroid.BOTTOM);
            return true;
        }
    }

    render () {
        return (
            <Navigator
                ref="navigator"
                initialRoute={{name:'home',component:LoginPage}}
                configureScene={(route,routeStack)=>{
                    return Navigator.SceneConfigs.FadeAndroid;
                }}
                renderScene={(route,navigator)=> {
                   let Component = route.component;
                   return <Component {...route.params} navigator={navigator}/>
                }}
            />

        );
    }
}