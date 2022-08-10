import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Form from '../components/Form/Form';
import { CreateForm_type } from '../types';

export default function CreateForm(props: CreateForm_type) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Form goBack={props.navigation.goBack} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  container1: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 16,
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



});
