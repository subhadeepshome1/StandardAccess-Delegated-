import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {Picker, PickerProps} from '@react-native-picker/picker';

const CustomDropdown = ({
  name,
  rules,
  control,
  defaultValue,
  errors,
  refName,
  placeholder,
  items,
  valueKey,
  labelKey,
  labelKeys,
  style,
  label,
  onSelection,
  enabled,
  ...props
}: QubeSelectProps) => {
  const styles = StyleSheet.create({
    selectContainer: {
      borderRadius: 25,
      borderWidth: !errors[name] ? 0.6 : 2,
      borderColor: !errors[name]
        ? '#393939'
        : 'red',
      borderStyle: 'solid',
      width: '90%',
      backgroundColor: '#393939',
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12,
    },
    error: {
      fontSize: 10,
      color: 'red',
    },
    label: {
      color: 'white',
      paddingBottom: 15
    },
  });

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={({field:{onChange, onBlur, value}}) => (
        <View style={{width: '100%'}}>
          <Text style={styles.label}>{label}</Text>
          <View
            style={[
              {width: '100%'},
              styles.selectContainer]}>
            <Picker
              // ref={refName}
              onValueChange={(itemValue, itemIndex):any => {
                !!onSelection && onSelection(itemValue);
                onChange(itemValue);
              }}
              selectedValue={value}
              itemStyle={[
                {fontSize: 12, textDecorationLine: 'underline'}]}
              enabled={enabled}
              mode="dropdown"
              dropdownIconColor={'#CBE54E'}
              {...props}>
              {!!placeholder && (
                <Picker.Item
                  label={placeholder}
                  value={-1}
                  key={-1}
                  color={'#CBE54E'}
                />
              )}
              {items.map((m: any) => (
                !!labelKeys ? <Picker.Item
                  label={labelKeys?.reduce((total, value) => {
                    return total + " " +  m[value]
                  }, "")}
                  value={m[valueKey]}
                  key={m[valueKey]}
                /> : <Picker.Item
                color={'#CBE54E'} 
                style={{backgroundColor: 'black'}}
                label={m[labelKey]}
                value={m[valueKey]}
                key={m[valueKey]}
              />
              ))}
            </Picker>
          </View>
          <Text
            style={[
              !!errors[name] ? styles.error : {display: 'none'}]}>
            {!!errors[name] && '* ' + errors[name].message.toString()}
          </Text>
        </View>
      )}
    />
  );
};

interface QubeSelectProps extends PickerProps {
  name: any;
  rules?: any;
  control: any;
  defaultValue?: any;
  errors: any;
  refName: any;
  placeholder?: string;
  items: any[];
  valueKey: string;
  labelKey: string;
  labelKeys?: string[];
  style?: any;
  label?: string;
  onSelection?: any;
  enabled?: any;
}

export default CustomDropdown;
