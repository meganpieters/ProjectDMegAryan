/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { ReactNode } from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Auth from './Auth';
import Homepage from './screens/Homepage';
import Chargers from './screens/Chargers';
import Users from './screens/Users';



const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Auth');

  const navigateTo = (screen: React.SetStateAction<string>) => {
    setCurrentScreen(screen);
  };

  const handleSignIn = () => {
    setAuthenticated(true);
    setCurrentScreen('Homepage');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Homepage':
        return <Homepage />;
      case 'Chargers':
        return <Chargers />;
      case 'Users':
        return <Users />;
      default:
        return <Auth />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      {!authenticated && (
        <View style={styles.bottomButtonsContainer}>
          <Button title="Homepage" color="#007AFF" onPress={() => navigateTo('Homepage')} />
          <Button title="Chargers" color="#007AFF" onPress={() => navigateTo('Chargers')} />
          <Button title="Users" color="#007AFF" onPress={() => navigateTo('Users')} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  buttonContainer: {
    width: 120,
  },
});
export default App;
