import React from 'react';
import './style.css';
import Resume from './pages/Resume';
import Cover from './pages/Cover';
import Form from './pages/Form';
import MenuBar from './components/MenuBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Router>
        <MenuBar />
        <Switch>
          <Route path="/cover">
            <Cover />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/" exact>
            <Resume />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
