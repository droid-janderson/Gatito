import React from 'react';
import { Services } from './src/screens/services';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { Cart } from './src/screens/cart';
import { Provider } from "react-redux";
import { Finish } from './src/screens/finish';
import { store } from './src/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      {/* <Test></Test> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Services">
          <Stack.Screen name="Services" component={Services} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Finish" component={Finish} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}