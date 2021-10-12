
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   View,
   Text
 } from 'react-native';
 import { Provider } from 'react-redux';
 import Navigation from './src/navigation';
import { store } from './src/store';
 
 
 const App = () => {
   return (
     <Provider store={store}>
       <Navigation />
     </Provider>
   );
 };
 
 export default App;