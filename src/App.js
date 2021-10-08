import React from 'react';
import './style.css';
import Resume from './pages/Resume';
import Cover from './pages/Cover';
import Sitemap from './pages/Sitemap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Router>
        <Sitemap />
        <Switch>
          <Route path="/cover">
            <Cover />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/" exact>
            <Resume />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
