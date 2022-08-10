import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../pages/Home';
import Header from '../components/Header/Header';
import CreateForm from '../pages/CreateForm';

const Stack = createStackNavigator();

export default function TabNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Header type='default' />,
            headerStyle: {
              backgroundColor: '#fff'
            }
          }}
        />
        <Stack.Screen
          name="CreateForm"
          component={CreateForm}
          options={{
            header: (e) => <Header type='create' goBack={e.navigation.goBack}/>,
            headerStyle: {
              backgroundColor: '#fff'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}