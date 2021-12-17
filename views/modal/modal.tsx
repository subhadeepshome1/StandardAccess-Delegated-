import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Image, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomDropdown from '../../utils/customDropDown/customDropdown';
import CustomTextInput from '../../utils/customTextInput';
import * as ImagePicker from "react-native-image-picker";
import { CameraOptions } from 'react-native-image-picker';
import { StoreState } from '../../models/reduxModels';
import { connect } from 'react-redux';

const BottomModal = ({modalVisible, onClose}:any) => {

    const {register, control, handleSubmit, setValue, reset, watch, getValues, formState:{errors}} = useForm<any>({
        mode: 'all'
    })

    const styles = StyleSheet.create({
        centeredView2: {
            width: '100%',
            top: '34%'
        },
        centeredView3: {
            justifyContent: "center",
            alignItems: "center",
        },
        modalView: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "black",
            padding: 10,
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
        modalView2: {
            borderRadius: 30,
            backgroundColor: "white",
            padding: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 10,
            height: '40%',
            width: '80%',
        },
        whiteText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
        },
        imgStyle: {
            height: '100%',
            width: '100%', 
            borderWidth: 0.4, 
            borderColor: 'transparent', 
            borderRadius: 10
        },
    })

    const dataforDropDown = [
        {
            id: 1,
            name: 'Zomato'
        }
    ]

    const [imagePickerVisible, setImagePickerVisible] = useState<boolean>(false);

    const [image, setImage] = useState<any[]>();

    const openCamera = () => {
        const cameraOptions:CameraOptions = {
            quality: 0.3,
            mediaType: 'photo',
            maxHeight: 640,
            maxWidth: 640,
            includeBase64: true
        };

        ImagePicker.launchCamera(cameraOptions, (resp) => {
            if (resp.didCancel) {
                console.log('User cancelled image picker');
            } else if (!!resp.errorCode) {
                console.log('ImagePicker Error: ', resp.errorCode);
            } else {
                console.log(resp.assets);
                setImage(resp.assets);
            }
        })
    }

    const openImagePicker = () => {
        const options:CameraOptions = {
            quality: 0.3,
            mediaType: 'photo',
            maxHeight: 640,
            maxWidth: 640,
            includeBase64: true
        };

        ImagePicker.launchImageLibrary(options, (resp) => {
            if (resp.didCancel == true) {
                console.log('User cancelled image picker');
            } else if (!!resp.errorCode) {
                console.log('ImagePicker Error: ', resp.errorCode);
            } else {
                console.log(resp.assets);
                setImage(resp.assets);
            }
        })
    }

    const onSubmit = (data:any) => {
        data.image = image;
        console.log("data", data);
    } 

    return(
        <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={()=> onClose()}>
            <View style={styles.centeredView2}>
                {/* <KeyboardAvoidingView behavior='position'> */}
                    <View style={styles.modalView}>
                        <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={true}>
                            <View style={{flexDirection: 'row', padding: 15, justifyContent: 'space-between'}}>
                                <Text style={styles.whiteText}>Restaurants</Text>
                                <TouchableOpacity style={{backgroundColor: '#CBE54E', justifyContent: 'center', height: 30, width: 30, alignItems: 'center', borderRadius: 15}} onPress={()=> onClose()}>
                                    <Text style={{color: 'black', fontSize: 32, transform: [{rotate: '45deg'}],fontWeight: '300', position: 'absolute', top: -8, right: 4}}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{ height: 80, width: 80, borderRadius: 40, borderWidth: 0.4, borderColor: 'yellow', backgroundColor: 'white', marginRight: 30}}>
                                    {!!image && (
                                        <Image source={image} style={{height: 81, width: 81, borderRadius: 40, borderWidth: 0}} />
                                    )}
                                    {!image &&(
                                        <Image source={require('../../assets/images/unnamed.png')} style={{height: 80, width: 80, borderRadius: 40, borderWidth: 0.4, borderColor: 'transparent'}} /> 
                                    )}
                                </View>
                                <TouchableOpacity onPress={()=> setImagePickerVisible(true)}>
                                    <Text style={{color: '#CBE54E', fontWeight: 'bold', fontSize: 16, textDecorationStyle: 'solid', textDecorationColor: '#CBE54E', textDecorationLine: 'underline'}}>Upload</Text>
                                </TouchableOpacity>
                                {imagePickerVisible && (
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <TouchableOpacity onPress={()=> openImagePicker()}> 
                                            <Text style={{color: '#CBE54E', textDecorationLine: 'underline', textDecorationColor: '#CBE54E'}}> 
                                                Pick Image
                                            </Text> 
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{paddingTop: 9}} onPress={()=> openCamera()}> 
                                            <Text style={{color: '#CBE54E', textDecorationLine: 'underline', textDecorationColor: '#CBE54E'}}>
                                                Capture Image
                                            </Text> 
                                        </TouchableOpacity>
                                        <View style={{position: 'absolute', right: 20}}>
                                            <TouchableOpacity style={{backgroundColor: '#CBE54E', justifyContent: 'center', height: 20, width: 20, alignItems: 'center', borderRadius: 10}} onPress={()=> setImagePickerVisible(false)}>
                                                <Text style={{color: 'black', fontSize: 32, transform: [{rotate: '45deg'}],fontWeight: '300', position: 'absolute', right: -1, bottom: -10}}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            </View>
                            <View style={{paddingBottom: 10, width: '90%', alignSelf: 'center'}}>
                                <CustomTextInput control={control} errors={errors} header='Add Name' name='name' placeholder='Name' refName={register('name')} editable={true} secureTextEntry={false} />
                            </View>
                            <View style={{paddingBottom: 10, width: '90%', alignSelf: 'center'}}>
                                <CustomTextInput control={control} errors={errors} header='Add Number' name='number' placeholder='Number' refName={register('number')} editable={true} secureTextEntry={false} type={'numeric'} maxLength={10} />
                            </View>
                            <View style={{width: '90%', alignSelf: 'center', paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{width: '50%'}}>
                                    <CustomDropdown control={control} errors={errors} label='Restaurant' name={'restaurant'} items={dataforDropDown} defaultValue={null} placeholder="Select restaurant" refName={register('restaurant')} valueKey='id' labelKey='name' mode='dropdown' />
                                </View>
                                <View style={{width: '50%'}}>
                                    <CustomTextInput control={control} errors={errors} header='Flat Number' name='fl_num' placeholder='Flat Number' refName={register('fl_num')} editable={true} secureTextEntry={false}  />
                                </View>
                            </View>
                            <View style={{width: '100%', alignItems: 'center', paddingTop: 15}}>
                                <TouchableOpacity style={{backgroundColor: '#CBE54E', paddingVertical: 10, width: '40%', alignItems: 'center', borderRadius: 25}} onPress={handleSubmit(onSubmit)}>
                                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                {/* </KeyboardAvoidingView> */}
            </View>
        </Modal>
    );
}

const mapDispatchToProps = {
    
}

const mapStateToProps = (store:StoreState) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(BottomModal);