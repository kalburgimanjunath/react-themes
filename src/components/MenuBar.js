import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default function MenuBar() {
  return (
    <div className="navbar navbar-inverse navbar-static-top">
      <div className="container">
        <a href="#" className="navbar-brand"></a>{' '}
        <button
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navHeaderCollapse"
        ></button>
        <div className="collapse navbar-collapse navHeaderCollapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <Link to="/">Home</Link>
            </li>

            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown">
                Social Media
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link>Twitter</Link>
                </li>

                <li>
                  <Link>Facebook</Link>
                </li>

                <li>
                  <Link>Google+</Link>
                </li>

                <li>
                  <Link>Instagram</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="resume">Resume</Link>
            </li>

            <li>
              <Link to="cover">Cover</Link>
            </li>
            <li>
              <Link to="form">Fill & Export</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}