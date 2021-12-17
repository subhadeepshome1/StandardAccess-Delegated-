import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CustomTextInput = ({header, name, letterSpacing, control, errors, placeholder, refName, secureTextEntry, editable, focusable, nextRef, refCopy, rules, submitAction, type, maxLength}:CustomeTextProps) => {
    const styles = StyleSheet.create({
        textInputStyles: { 
            backgroundColor: '#393939',
            letterSpacing: letterSpacing!= undefined ? 1 : letterSpacing,
            borderRadius: 25,
            paddingHorizontal: 15,
            color: 'white' 
        },
        error: {
            fontSize: 16,
            color: 'red'
        }
    })
    return (
        <Controller 
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => (
                <View style={{paddingVertical: 5}}>
                    <Text style={{color: 'white', paddingBottom: 15}}> {header} </Text>
                    <TextInput 
                        style={styles.textInputStyles} 
                        placeholder={placeholder} 
                        placeholderTextColor={'white'}
                        secureTextEntry={secureTextEntry}
                        keyboardType={type}
                        onBlur={onBlur}
                        maxLength={!!maxLength? maxLength: 100}
                        onChangeText={value => onChange(value)}
                        value={value}
                        ref={!!refCopy ? (e) => {refName(e);refCopy(e)}:refName}
                        autoComplete={"off"}
                        autoCapitalize="none"
                        editable={editable}
                        focusable={focusable}
                        onSubmitEditing={() => {
                            if(!!nextRef) {
                                nextRef.focus();
                            } else if(!!submitAction) {
                                submitAction()
                            }
                        }}
                    />
                    <Text
                        style={[
                            !!errors[name] ? styles.error : {display: 'none'}
                        ]}>
                        {!!errors[name] && '* ' + errors[name].message.toString()}
                    </Text>
                </View>
            )}
        />
    );
}

export default CustomTextInput;

interface CustomeTextProps {
    placeholder: string;
    header: string;
    secureTextEntry: boolean;
    letterSpacing?: number;
    control: any;
    refName: any;
    rules?: any;
    nextRef?: any;
    editable?: any;
    name: string;
    errors: any;
    refCopy?: any;
    focusable?: any;
    submitAction?: any;
    type?: any;
    maxLength?: any;
}