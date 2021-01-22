import React, { Component } from 'react';
import proptypes from 'prop-types';
import Icon from  'react-native-vector-icons/FontAwesome';

import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Animated,
    Easing,
 } from 'react-native';
import colors from '../../styles/colors';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: props.inputType == 'text' || props.inputType == 'email' ? false : true,
      scaleCheckmarkValue: new Animated.Value(0),
    };
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }

  scaleCheckMark(value) {
    Animated.timing (
      this.state.scaleCheckmarkValue,
      {
        toValue: value,
        duration:400,
        easing: Easing.easeOutBack
      }
    ).start();
  }
  toggleShowPassword() {
    this.setState({ secureInput: !this.state.secureInput });
  }
  render() {
      const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customStyle, onChangeText, showCheckmark } = this.props;
      const { secureInput, scaleCheckmarkValue } = this.state;
      const fontSize = labelTextSize ||  14;
      const color = labelColor || colors.white;
      const inputColor = textColor || colors.white;
      const borderBottom = borderBottomColor || 'transparent';
      const keyboardType = inputType == 'email' ? 'email-address' : 'default';

      const iconScale = scaleCheckmarkValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0,1.6, 1]
      });

      const scaleValue = showCheckmark ? 1 : 0;
      this.scaleCheckMark(scaleValue); 

    return (
      <View style={[customStyle,styles.wrapper]}>
        <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
        {inputType == 'password' ?
        <TouchableOpacity
          style={styles.showButoon}
          onPress={this.toggleShowPassword}
        >
          <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>  
        : null }
        <Animated.View style={[{transform: [{scale: iconScale}]},styles.CheckMarkWrapper]}>
          <Icon
          name="check"
          size={20}
          color={colors.white}
          />
        </Animated.View>
        
        <TextInput 
            autoCorrect= {false}
            style={[{color:inputColor, borderBottomColor:borderBottom},styles.inputField]}
            secureTextEntry={secureInput}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
        />
      </View>
    );
  }
}

InputField.proptypes = {
    labelText: proptypes.string.isRequied,
    labelTextSize: proptypes.number,
    labelColor: proptypes.string,
    textColor: proptypes.string,
    borderBottomColor: proptypes.string,
    inputType: proptypes.string.isRequired,
    customStyle: proptypes.object,
    onChangeText: proptypes.func,
    showCheckmark: proptypes.bool.isRequired,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex'
    },
    label: {
        fontWeight: '800',
        marginBottom: 20,
        paddingLeft: 10
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 8
    },
    showButoon: {
      position: 'absolute',
      right: 0,
    },
    showButtonText: {
      color: colors.white,
      fontWeight: '800'
    },
    CheckMarkWrapper:{
      position: 'absolute',
      right: 0,
      bottom: 6,
    }
});