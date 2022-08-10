import React from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

interface local_data_type {
  value: number,
  lable: string
}

const local_data:local_data_type[] = [
  {
    value: 1,
    lable: 'Published',
   
  },
  {
    value: 2,
    lable: 'Draft',
    
  }
];

export interface Props { setStatus: Function, status: number}

const DropDown: React.FC<Props> = _props => {

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      iconStyle={styles.iconStyle}
      maxHeight={200}
      value={_props.status}
      data={local_data}
      valueField="value"
      labelField="lable"
      placeholder="Status"
      imageField='none'
      onChange={e => {
        _props.setStatus(e.value);
      }}
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    marginBottom: 8,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 15,
    
  },
  placeholderStyle: {
    fontFamily: 'Lato_400Regular',
    borderColor: 'transparent',
    fontSize: 16,
    color: "#8A8C90",
    lineHeight: 20,
  },
  selectedTextStyle: {
    fontFamily: 'Lato_400Regular',
    borderColor: 'transparent',
    fontSize: 16,
    color: "#151C26",
    lineHeight: 20,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});