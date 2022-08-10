import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowIcon, LogoSvg } from '../../assets/icons/icons';

interface header_types { type: string, goBack?: Function | any }

export default function Header({ type, goBack }: header_types) {

  switch (type) {
    case "create":
      return (
        <View style={styles.create_container}>
          <TouchableOpacity style={styles.create_container_icon}
            onPress={() => goBack()}
          >
            <ArrowIcon />
          </TouchableOpacity>

          <Text style={styles.create_container_title}>Create new post</Text>
          <View style={styles.create_container_right}></View>
        </View>
      );;
    default:
      return (
        <View style={styles.container}>
          <LogoSvg />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 14,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  create_container: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 14,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  create_container_title: {
    fontFamily: 'Lato_400Regular',
    fontSize: 18,
    color: "#151C26",
    lineHeight: 24,
    textAlign: 'center',
    flex: 10
  },
  create_container_icon: {
    flex: 1
  },
  create_container_right: {
    flex: 1
  }
});
