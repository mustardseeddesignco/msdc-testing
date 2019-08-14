import React, { Component } from 'react';
import { Link } from 'gatsby'

export default class menu extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-css-modules">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul> 
      </div>
    );
  }
}
