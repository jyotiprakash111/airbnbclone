import React, { Component } from 'react'
import proptypes from 'prop-types';
import Icon from  'react-native-vector-icons/FontAwesome';
import InputField from '../components/Form/InputField';
import NextArrowButton  from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification.js/Notification';
import Loader from '../components/Form/Loader';
import colors from '../styles/colors';
import { 
    Text,
    View,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
    StatusBar
} from 'react-native';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            validEmail: false,
            emailAddress: '',
            validPassword: false,
            loadingVisible: false,
        }
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }
    handleNextButton() {
        // lets Simulate a slow server to show the notification
        this.setState({ loadingVisible: true });

        setTimeout(() => {
        if (this.state.emailAddress == 'hello@imandy.ie' && this.state.validPassword) {
            alert("sucess");
            this.setState({ formValid: true, loadingVisible: false});
        } else {
            this.setState({formValid: false, loadingVisible: false});
        }
      }, 2000);
    }
    handleCloseNotification() {
        this.setState({ formValid: true });
    }

    // Email Validation func
    handleEmailChange(email) {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({ emailAddress: email });

        if (!this.state.validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({validEmail: true });
            }
        }
        else {
            if(!emailCheckRegex.test(email)) {
                this.setState({validEmail: false });
            }
        }
    }

    handlePasswordChange(password) {
        if (!this.state.validPassword) {
            if (password.length > 4) {
                // password has to br 4 characters long 
                this.setState({validPassword: true});
            } else if (password <= 4) {
                this.setState({validPassword: false});
            }
        }
    }

    toggleNextButtonState() {
        const { validEmail, validPassword } = this.state;
        if ( validEmail && validPassword ) {
            return false;
        }
        return true;
    }
    render() {
        const { formValid, loadingVisible, validEmail, validPassword } = this.state;
        const showNotification =  formValid ? false : true;
        const background = formValid ? colors.green01 : colors.darkOrange;
        const notificationMarginTop = showNotification ?  10 : 0;
        return (
            <KeyboardAvoidingView
            style={[{backgroundColor: background},styles.wrapper]}
            >
                <View style={styles.scrollViewWrapper}>
                <StatusBar backgroundColor = {colors.green01} hidden={false} barStyle="dark-content" />
                    <ScrollView style={styles.scrollview}
                    showsVerticalScrollIndicator={false}
                    >
                    <Text style={styles.LoginHeader}> Login </Text>
                    <InputField
                        labelText="EMAIL ADDRESS"
                        labelTextSize={14}
                        labelColor= {colors.white}
                        textColor= {colors.white}
                        borderBottomColor = {colors.white}
                        inputType= "email"
                        customStyle= {{marginBottom:30}}
                        onChangeText = {this.handleEmailChange}
                        showCheckMark = {validEmail}
                    />
                    <InputField
                        labelText="PASSWORD"
                        labelTextSize={14}
                        labelColor= {colors.white}
                        textColor= {colors.white}
                        borderBottomColor = {colors.white}
                        inputType= "password"
                        customStyle= {{marginBottom:30}} 
                        onChangeText= { this.handlePasswordChange}
                        showCheckMark = { validPassword}
                    />
                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton 
                        handleNextButton={this.handleNextButton}
                        disabled={this.toggleNextButtonState()}
                        />
                    </View>
                    <View style={[styles.notificationWrapper, {marginTop:notificationMarginTop}]}></View>
                    <Notification
                    showNotification={showNotification}
                    handleCloseNotification={this.handleCloseNotification}
                    type='Error:'
                    firstline="These crendentials not look right."
                    secondline="Please try again."
                    />
                </View>
                <Loader
                animationType ="fade"
                modalVisible={loadingVisible}
                />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex:1,
        // backgroundColor: colors.green01,
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    scrollview: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex:1,
    },
    LoginHeader: {
        fontSize: 34,
        color: colors.white,
        fontWeight: '400',
        marginBottom: 40,
    },
    nextButton:{
        // justifyContent: 'center',
        alignItems: "flex-end",
        right: 20,
        top:40,
    },
    notificationWrapper: {
        position: 'absolute',
        // alignItems:'flex-end',
        bottom: 0,
        // zIndex: 9,
    }
});