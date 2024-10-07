import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import Modal from 'react-native-modal';
import Card from '../Card';

const { width } = Dimensions.get('window'); 

const IndexModel = ({ isModalVisible, toggleModal }) => {
    return (
        <View style={styles.container}>
            <Modal
                isVisible={isModalVisible}
                onBackButtonPress={toggleModal}
                onBackdropPress={toggleModal}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                useNativeDriver
                style={styles.modal}
            >
                <View style={styles.modalContent}>
                    <Card />
                    <Image //background Image
                        source={{ uri: 'https://www.shutterstock.com/image-vector/pin-point-logo-can-be-600nw-1679653036.jpg' }}
                        style={styles.cornerImage}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default IndexModel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    modal: {
        margin: 0,
        justifyContent: 'flex-end',
    },
    modalContent: {
        width: width,
        maxHeight: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignSelf: 'center',
    },
    cornerImage: {
        width: 200, 
        height: 200,
        position: 'absolute',
        bottom: 10,
        right: 1,
        zIndex:-100
      },
    
});

