/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { WebView } from 'react-native';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

const instructions = Platform.select({
  ios: '-------------------,\n' +
    'Cmd+D or shake for dev menu',
  android: '-----------------,\n' +
    'Sha---------------menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
       <WebView
        source={{uri: 'http://cliente.dayback.com.br'}}
        style={{marginTop: 20}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
