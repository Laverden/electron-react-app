import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../logo.svg'

export default function About() {
  return (
    <div className="about">
      <p>Welcome to the About Page</p>
      <Link className="App-link" to="/">Link to Home</Link>
      <img className="App-logo" widht="275" src={Logo} alt=""/>
    </div>
  )
}