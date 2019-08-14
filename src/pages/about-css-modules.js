import React from 'react';
import styles from "./about-css-modules.module.css"
import Layout from '../components/layout'


const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default () => (
    <div>

    <Layout>
    
        <h1>Container of CSS Modules</h1>
        <p>CSS Modules are cool.</p>

        <User 
            username="Brandon Moore"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="I'm Brandon Moore, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User 
            username="Cassie Moore"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Cassie Moore. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
    
    </Layout>
    
    </div>
)