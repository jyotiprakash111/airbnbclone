import React, { Component } from 'react'
import {
     View,
     Image,
     Modal,
     StyleSheet,
} from 'react-native'
import proptypes from 'prop-types';
import colors from '../../styles/colors';

 class Loader extends Component {
    render() {
        const {animationType, modalVisible} = this.props;
        return (
            <Modal
            animationType={animationType}
            visible={modalVisible}
            transparent={true}
            >
                <View style={styles.wrapper}>
                    <View style={styles.loaderContainer}>
                        <View>
                            <Image
                            style={styles.loaderImage}
                            source={require('../../../assets/images/greenLoader.gif')}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default Loader;

Loader.proptypes = {
    animationType: proptypes.string.isRequired,
    modalvisible: proptypes.bool.isRequired,
}
const styles =StyleSheet.create({
    wrapper: {
        zIndex:9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position:'absolute',
        width: '100%',
        height: '100%',
        top:0,
        left: 0,
    },
    loaderContainer:{
        width:90,
        height: 90,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.white,
        position: 'absolute',
        left:'50%',
        top:'50%',
        marginLeft: -45,
        marginTop: -45,
    },
    loaderImage: {
        width: 50,
        height: 50,
        borderRadius: 15,
    }
})