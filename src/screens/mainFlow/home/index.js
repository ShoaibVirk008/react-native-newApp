import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Wrapper, CustomBottomSheet, RegularText } from '../../../components';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wrapper flex={1} style={{ backgroundColor: 'skyblue', }}>
        <CustomBottomSheet
          content={
            <Wrapper flex={1}>
            </Wrapper>
          }
        />
      </Wrapper>
    );
  }
}

export default Home;


