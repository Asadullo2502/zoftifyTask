/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import {Provider} from 'react-redux';
import store from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';
import TabNavigate from './routes/navigate';
import 'react-native-gesture-handler';
import {hydrate} from './store/features/card';
export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });

  const getData = async () => {
    try {
      let res = await AsyncStorage.getItem('@data');
      if (res) {
        let arr = JSON.parse(res);
        return store.dispatch(hydrate(arr));
      } else {
        return [];
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <TabNavigate />
      </Provider>
    );
  } else {
    return <AppLoading />;
  }
}
