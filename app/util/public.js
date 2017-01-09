/**
 * Created by dhy on 2017/1/6.
 */
import {
    Dimensions,
    StyleSheet,
} from 'react-native'
export const Public = {
    ScreenWidth:Dimensions.get('window').width,
    ScreenHeight:Dimensions.get('window').height,

}

export const common_style  = StyleSheet.create({
    container:{
        flex:1,
    }
})