import React, {useState} from 'react';
import {StatusBar, StyleSheet, Switch, SafeAreaView, View,} from 'react-native';
import {ThemeContext} from './src/context/ThemeContext';
import {Colors} from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';


function App() {

  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
      <StatusBar style="auto" />
      <Switch
      value={theme === 'dark'}
      onValueChange={() => setTheme(theme==='light' ? 'dark' : 'light')}
      />
      <MyKeyboard/>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

});

export default App;
