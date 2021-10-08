import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default function Sitemap() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
      <li>
        <Link to="/cover">Cover</Link>
      </li>
    </ul>
  );
}
