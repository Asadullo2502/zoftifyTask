import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Formik } from 'formik';
import SelectCountryScreen from '../DropDown/DropDown';
import { useDispatch } from "react-redux";
import { addToCart } from '../../store/features/card';
import { Form_type } from '../../types';
import * as ImagePicker from 'expo-image-picker';
import { PlusIcon } from '../../assets/icons/icons';


export default function Form({ goBack }: Form_type) {
  const [status, setStatus] = useState(0)
  const [img, setImg] = useState<string>()
  const dispatch = useDispatch();
 
  const click =  async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImg(result.uri);
    }
  }
  return (
    <View>
      <Formik
        initialValues={{
          title: '',
          text: '',
          status: 0,
          img: ''
        }}
        onSubmit={(values) => {
          if (values.title && values.text && img) {
            dispatch(addToCart({ ...values, status: status, id: new Date().getTime(), img: img }))
            setImg(undefined);
            goBack()
          }
        }}>
        {(props) => (
          <View>
            <View style={styles.info}>
              <TextInput
                style={styles.input}
                value={props.values.title}
                placeholder="Title"
                onChangeText={props.handleChange('title')}
                placeholderTextColor="#8A8C90" 
              />

              <SelectCountryScreen setStatus={setStatus} status={status} />

              <TextInput
                style={styles.input_textarea}
                value={props.values.text}
                multiline
                placeholder="Description"
                onChangeText={props.handleChange('text')}
                textAlignVertical="top"
                placeholderTextColor="#8A8C90" 
              />
            </View>

            <View style={styles.image_wrapper}>
              <Text style={styles.image_wrapper__title}>Photo</Text>

              <TouchableOpacity onPress={() => click()} style={styles.image_input}>
                {
                  img ? 
                  <Image source={{ uri: img }} style={styles.image} />
                  :
                  <PlusIcon/>
                }
              </TouchableOpacity>
            </View>

            <View style={styles.botttom}>
              <TouchableOpacity style={styles.button}
                onPress={() => props.handleSubmit()}
              ><Text style={styles.button_text}>Submit</Text></TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 8,
    paddingVertical: 19,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontFamily: 'Lato_400Regular',
    borderColor: 'transparent',
    fontSize: 16,
    color: "#151C26",
    lineHeight: 20,
    backgroundColor: '#F8F8F8'
  },
  input_textarea: {
    borderWidth: 1,
    marginBottom: 8,
    paddingTop: 19,
    paddingBottom: 19,
    paddingHorizontal: 12,
    minHeight: 120,
    borderRadius: 8,
    fontFamily: 'Lato_400Regular',
    borderColor: 'transparent',
    fontSize: 16,
    color: "#151C26",
    lineHeight: 20,
    backgroundColor: '#F8F8F8'
  },
  label: {

  },
  button: {
    backgroundColor: '#0071D8',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  button_text: {
    alignItems: 'center',
    fontFamily: 'Lato_700Bold',
    fontSize: 16,
    color: "#fff",
    lineHeight: 20,
  },
  info: {
    backgroundColor: '#fff',
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 20
  },
  image_wrapper: {
    backgroundColor: '#fff',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 20
  },
  image_wrapper__title: {
    fontFamily: 'Lato_400Regular',
    fontSize: 18,
    color: "#151C26",
    lineHeight: 24,
  },
  botttom: {
    paddingHorizontal: 16,
    marginTop: 12,
    paddingVertical: 16
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  image_input: {
    marginTop: 18
  }
});
