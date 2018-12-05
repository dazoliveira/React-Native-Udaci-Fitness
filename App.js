import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import AddEntry from './component/AddEntry'
import History from './component/History'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
  componentDidMount() {
    console.log('BEFORE')
    debugger
    console.log('AFTER')
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 20 }}>
            <History />
          </View>
        </View>
      </Provider>
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
