import React from 'react';
import Header from '../components/header'
import Layout from '../components/layout'

export default () => (
    <Layout>
    <div style= {{ color: "goldenrod", textAlign: "center" }}>
    <Header headerText="About World" />
        
        <p>A little info about us.</p>
    </div>
    </Layout>
)