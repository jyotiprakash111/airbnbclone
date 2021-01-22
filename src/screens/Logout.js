import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableHighlight,Image, StatusBar} from 'react-native';
import colors from  '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundedBotton from '../components/buttons/RoundedButton';

class Logout extends Component {
    onFacebookPress() {
        alert('Facebook button pressed');
    }

    onCreateAccountpress() {
        alert('Create Account Pressed');
    }
    onMoreOptionPress() {
        alert('More Options Button Pressed');
    }
  render() {
    return(
        <View style={styles.wrapper}>
            <StatusBar backgroundColor = {colors.green01} hidden={false} barStyle="dark-content" />
            <View style={styles.welcomewrapper}>
            <Image source={require('../img/airbnb.png')}
            style={styles.logo}
            />
            <Text style={styles.welcomeText}>Welcome To Airbnb.</Text>
            <RoundedBotton
            text="Continue with Facebook"
            color={colors.green01}
            background={colors.white} 
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
            handleOnPress={this.onFacebookPress}
            />
            <RoundedBotton
            text="Create Account"
            textcolor={colors.white}
            handleOnPress={this.onCreateAccountpress}
            />
            <TouchableHighlight 
            style={styles.moreOptionsButton}
            onPress={this.onMoreOptionPress}
            >
            <Text style={styles.moreOptionsButtonText}>More Options</Text>
            </TouchableHighlight>
            <View style={styles.termsAndConditions}>
                <Text style={styles.termsText}>By Tapping Continue, Create Account or More,</Text>
                <Text style={styles.termsText}>options,</Text>
                <Text style={styles.termsText}>I agree to Airbnb's </Text>
                <TouchableHighlight style={styles.linkbutton}>
                    <Text style={styles.termsText}>Terms Of Service</Text>
                </TouchableHighlight>
                <Text style={styles.termsText}>,</Text>
                <TouchableHighlight style={styles.linkbutton}>
                    <Text style={styles.termsText}>Privacy Policy</Text>
                </TouchableHighlight>
                <Text style={styles.termsText}>, and</Text>
                <TouchableHighlight style={styles.linkbutton}>
                    <Text style={styles.termsText}>No Discrimination Policy</Text>
                </TouchableHighlight>
                <Text style={styles.termsText}>.</Text>
            </View>
            </View>
        </View>
    );
  }
}


export default Logout;

const styles =StyleSheet.create({
    wrapper:{
        flex:1,
        display: 'flex',
        backgroundColor: colors.green01,
    },
    logo:{
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40,
    },
    welcomewrapper:{
        flex:1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },
    welcomeText:{
        fontSize: 30,
        color: "#fff",
        fontWeight: '300',
        marginBottom: 40,
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8,
    },
    moreOptionsButton:{
        marginTop:10,
    },
    moreOptionsButtonText:{
        color: colors.white,
        fontSize:16,
    },
    termsText:{
        color: colors.white,
        fontSize: 12,
        fontWeight: '600',
    },
    termsAndConditions:{
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    linkbutton:{
        borderBottomWidth:1,
        borderBottomColor:colors.white,
    }
});