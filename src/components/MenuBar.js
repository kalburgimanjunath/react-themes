import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { withTheme } from '@callstack/react-theme-provider';

function MenuBar({ theme, themes, onChangeTheme }) {
  return (
    <Container textColor={theme.textColor} background={theme.backgroundColor}>
      <div className="navbar navbar-static-top">
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
    </Container>
  );
}
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.background};
  text-align: center;
  font-size: 1.4rem;
`;

export default withTheme(MenuBar);
