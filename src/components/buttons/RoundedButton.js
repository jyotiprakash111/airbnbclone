import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import propTypes from 'prop-types';
import colors from '../../styles/colors';
export default class RoundedButton extends Component {
    render() {
        const { text, color,textColor,icon, background, handleOnPress } = this.props;
        const backgroundColor= background || 'transparent';
        // const color = textColor || colors.black; 
        return (
        <TouchableHighlight 
        onPress={handleOnPress}
        style={[{backgroundColor},styles.wrapper]}>
            <View style={styles.buttonTextWrapper}>
            {icon}
        <Text style={[{color}, styles.buttontext]}> {text} </Text>
        </View>
        </TouchableHighlight>
        );
    }
}

RoundedButton.propTypes = {
    text: propTypes.string.isRequired,
    textColor: propTypes.string,
    background: propTypes.string,
    icon: propTypes.object,
    handleOnPress: propTypes.func.isRequired,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom:15,
        alignItems:'center',
    },
    buttontext:{
        fontSize: 16,
        width: '100%',
        textAlign: 'center',
    },
    buttonTextWrapper:{
        flexDirection:'row',
        justifyContent:'flex-end',
    }
})