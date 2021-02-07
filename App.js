import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { appStyles, Navigation } from './src/services';
import { MainWrapper, ButtonColored, ButtonBordered, RowWrapper, ButtonColoredSmall, ButtonBorderedSmall } from './src/components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Navigation />
    );
  }
}

export default App;
