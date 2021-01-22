import React, { Component } from 'react';
import proptypes from 'prop-types';
import { 
    Text,
    View, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    Easing,
    Animated
} from 'react-native'
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../../styles/colors';

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionValue: new Animated.Value(60),
        };
        this.closeNotification = this.closeNotification.bind(this);
        this.animatedNotification = this.animatedNotification.bind(this);
    }

    animatedNotification(value) {
        const { positionValue } = this.state;
        Animated.timing (
            positionValue,
            {
                toValue: value,
                duration: 300,
                velocity: 3,
                tension: 2,
                friction: 8,
                easing: Easing.easeoutBack,
            }
        ).start();
    }

    closeNotification() {
        this.props.handleCloseNotification();
    }
    render() {
        const {type, firstline, secondline, showNotification} = this.props;
        showNotification ? this.animatedNotification(0) : this.animatedNotification(60);
        const {positionValue} = this.state;
        // alert(showNotification)
        return (
            <Animated.View style={[{transform: [{translateY: positionValue }]},styles.wrapper]}>
                <View style={styles.notificationContent}>
                    <Text style={styles.errorText}>{type}</Text>
                    <Text style={styles.errorMessage}>{firstline}</Text>
                    <Text style={styles.errorMessage}>{secondline}</Text>
                </View>
                <TouchableOpacity
                style={styles.closeButton}
                onPress={this.closeNotification}
                >
                    {/* <Icon
                    name="times"
                    size={20}
                    color={color.lightGray}
                    /> Works fine */} 
                    <View>
                    <Image style={{height: 16, width: 16}} source={require('../../img/close.png')} />
                    </View>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

Notification.proptypes = {
    showNotification:proptypes.bool.isRequired,
    type: proptypes.string.isRequired,
    firstline: proptypes.string,
    secondline: proptypes.string,
    handleCloseNotification: proptypes.func,
};

const styles=  StyleSheet.create({
    wrapper:{
        backgroundColor: colors.white,
        height: 60,
        width: '100%',
        padding: 10,
    },
    notificationContent:{
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems:"flex-start",
    },
    errorText:{
        color: colors.darkOrange,
        marginRight: 5,
        fontSize: 14,
        marginBottom: 2,
        fontWeight: '200'
    },
    errorMessage:{
        marginBottom: 2,
        fontSize: 14,
    },
    closeButton:{
        position:'absolute',
        right:10,
        top: 10,
    },

});