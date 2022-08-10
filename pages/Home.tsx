import React, { useEffect, useState, useRef } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BlogCard from '../components/BlogCard/BlogCard';
import { useSelector } from "react-redux";
import { useFocusEffect } from '@react-navigation/native';
import { Data_type, Home_type } from '../types';


export default function Home({ navigation }: Home_type) {
  const [data, setData] = useState<Data_type[]>([])
  const cart: [] = useSelector((state: any) => state.cart);

  const scrollRef = useRef<any>();
  useEffect(() => {
    if (cart.length) {
      let array = [...cart]
      setData(array.reverse())
    }
  }, [cart])

  useFocusEffect(
    React.useCallback(() => {
      scrollRef.current.scrollTo({ y: 0, animated: true });
    }, []));

  return (
    <>
      <ScrollView style={styles.container} ref={scrollRef}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        {
          data && data.map((elem, index) => <BlogCard key={index} data={elem} /> )
        }
        <View style={styles.free}></View>
      </ScrollView>

      <View style={styles.botttom}>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('CreateForm')}
        ><Text style={styles.button_text}>New Post</Text></TouchableOpacity>
      </View>
    </>
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
  button: {
    backgroundColor: '#0071D8',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  button_text: {
    alignItems: 'center',
    fontFamily: 'Lato_700Bold',
    fontSize: 16,
    color: "#fff",
    lineHeight: 20,
  },
  botttom: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  free: {
    height: 80
  }

});
