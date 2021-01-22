import React, { Component } from 'react';
import proptypes from 'prop-types';
import colors from '../../styles/colors';
import Icon  from 'react-native-vector-icons/FontAwesome';
import {
    TouchableHighlight,
    StyleSheet,
    Image,
    View
} from 'react-native';

export default class NextArrowButton extends Component {
    render() {
        const { disabled, handleNextButton } = this.props;
        const opacityStyle = disabled ? 0.3 : 0.6 ;
        // const opacityStyle = disabled ? { backgroundColor : 'rbga(255,255,255,0.2' } : { backgroundColor: 'rgba(255,255,255, 0.6)'};
        // 36,148,150, 1 actual color 
        return (
           <TouchableHighlight
           style={[{opacity: opacityStyle},styles.button]}
           onPress= {handleNextButton}
           disabled={disabled}
           >
               <Icon 
            //    name= "md-build" from Ionicon
            //    name= "md-rocket" from Ionicon
               name= "angle-right"
               color={colors.green01}
               size={20}
               style={styles.icon}
               />
               {/* <View>
               <Image style={{height: 15, width: 10}} source={require('../../img/arrow1.png')} />
               </View> */}
           </TouchableHighlight>
        );
    }
}

NextArrowButton.proptypes = {
    disabled: proptypes.bool,
    handleNextButton: proptypes.func,
};

const styles= StyleSheet.create({
    icon: {
        marginRight: -2,
        marginLeft: -2,
        marginBottom:2,
    },
    button: {
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
        paddingTop:5,
        backgroundColor: colors.white,
        // marginBottom: 5,
    }
});