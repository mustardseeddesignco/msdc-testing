import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
    <div style={{ color: "goldenrod", textAlign: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Header headerText="Let's Learn Gatsby" />
            <h1>Hello World!</h1>
            <p>This is getting easier.</p>
    </div>
)
