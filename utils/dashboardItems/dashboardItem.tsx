import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomModal from '../../views/modal/modal';
import CustomTextInput from '../customTextInput';

const DashboardItem = ({text, image, id}:DashboardItemProps) => {
    const styles = StyleSheet.create({
        container: {
            height: 81, 
            width: 81, 
            backgroundColor: 'white', 
            marginVertical: 10, 
            borderWidth: 0.3, 
            borderColor: 'transparent', 
            borderRadius: 10, 
            alignItems: 'center', 
            padding: 2
        },
        imgContainer: {
            height: '60%', 
            justifyContent: 'center'
        },
        textContainer: {
            height: '40%'
        },
        textStyles: {
            textAlign: 'center', 
            color: 'black', 
            fontSize: 10, 
            textAlignVertical: 'center', 
            paddingHorizontal: 3
        },
        openModalButton: {
            position: 'absolute', 
            top: -9, 
            right: -7, 
            borderWidth: 0.2, 
            borderColor: '#CBE54E', 
            borderRadius: 10, 
            backgroundColor: '#CBE54E', 
            height: 20, 
            width: 20, 
            justifyContent: 'center', 
            alignItems: 'center'
        },
        buttonTextStyles: {
            color: 'black', 
            fontSize: 14, 
            fontWeight: 'bold'
        },
        centeredView2: {
            // flex: 1,
            // justifyContent: "flex-end",
            // alignItems: "flex-end",
            // marginTop: 22,
            // height: '30%',
            // width: '100%'
            height: '60%'
        },
        modalView: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            // borderRadius: 30,
            backgroundColor: "black",
            padding: 10,
            // alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 100,
            height: '100%',
            width: '100%',
        },
        modalInside: {
            flexDirection: 'column'
        },
        whiteText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
        },
        ModalHeaderText: {
            fontSize: 20,
            fontWeight: 'bold'
        }
    })

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const onclose = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={{uri: image}} style={{height: 35, width: 35, resizeMode: 'contain'}} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textStyles}>{text}</Text>
            </View>
            <TouchableOpacity style={styles.openModalButton} onPress={()=>setModalVisible(true)}>
                <Text style={styles.buttonTextStyles}>+</Text>
            </TouchableOpacity>
            <BottomModal modalVisible={modalVisible} onClose={onclose} />
        </View>
    );
}

interface DashboardItemProps {
    text: string;
    image: string;
    id: number;
    modalVisible?: boolean;
}

export default DashboardItem;