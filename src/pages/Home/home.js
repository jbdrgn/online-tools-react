import React, { Component } from 'react'
import Calculator from '../Calculator/calculator';
import { HomeH1 } from './HomeElements';

class Home extends Component {
  render() {
    return (
      <>
        <HomeH1>Welcome to Online Tools</HomeH1>
        <Calculator />
      </>
    )
  }
}

export default Home;
