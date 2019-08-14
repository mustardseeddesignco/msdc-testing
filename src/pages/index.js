import React from "react"
import Header from "../components/header"
import Layout from '../components/layout'

export default () => (
    <Layout>
    <div style={{ color: "goldenrod", textAlign: "center" }}>
        <Header headerText="Let's Learn Gatsby" />
            <h1>Hello World!</h1>
            <p>This is getting easier.</p>
    </div>
    </Layout>
)
