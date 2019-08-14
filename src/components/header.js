import React from 'react'
import headerStyles from "../components/header.module.css"


export default props => 
    <div className={headerStyles.header}>
    <h1>{props.headerText}</h1>  
     
    </div>




