import React, {Component} from 'react';
import { 
  View,
} from 'react-native';

class App extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, margin:5}}>
        <View style={{flex: 1, backgroundColor: 'powderblue', margin:5}} />
        <View style={{flex: 2, backgroundColor: 'skyblue', margin:5}} />
       
        <View style={{flex: 1, flexDirection: 'row', margin:5}}>
          <View style={{flex: 1, backgroundColor: 'steelblue', margin:5}} />
          <View style={{flex: 1, backgroundColor: 'aqua', margin:5}} />
          <View style={{flex: 1,  backgroundColor: 'blanchedalmond', margin:5}} />
        </View>
       
        <View style={{flex: 2, backgroundColor: 'cornflowerblue', margin:5}} />
       
        <View style={{flex: 1, flexDirection: 'row', margin:5}}>
          <View style={{flex: 1, backgroundColor: 'cadetblue', margin:5}} />
          <View style={{flex: 1, backgroundColor: 'deepskyblue', margin:5}} />
        </View>

      </View>
    );
  }
};

export default App