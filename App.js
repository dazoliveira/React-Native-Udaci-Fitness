import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddEntry from './component/AddEntry'

export default class App extends React.Component {
  componentDidMount(){
    console.log('BEFORE')
    debugger
    console.log('AFTER')
  }
  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
