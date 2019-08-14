import React, { Component } from 'react';
import Layout from '../components/layout'
import Header from '../components/header'

export default class Test extends Component {
  render() {
    return (
      <Layout>
          <Header headerText= {"Testing"} /> 
          Testing 
      </Layout>
    );
  }
}
