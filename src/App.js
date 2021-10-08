import * as React from 'react';
import './style.css';
import Resume from './pages/Resume';
import Cover from './pages/Cover';
import Form from './pages/Form';
import Welcome from './pages/Welcome';
import MenuBar from './components/MenuBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { themes } from './themes';
import { ThemeProvider } from '@callstack/react-theme-provider';

import ThemeChanger from './ThemeChanger';

class App extends React.Component {
  state = {
    theme: themes.normal,
  };
  handleThemeChange = (themeName) => {
    this.setState({ theme: themes[themeName] });
  };
  render() {
    return (
      <div>
        <ThemeProvider theme={this.state.theme}>
          <div>
            <Router>
              <ThemeChanger
                onChangeTheme={this.handleThemeChange}
                themes={Object.keys(themes)}
              />
              <MenuBar
                onChangeTheme={this.handleThemeChange}
                themes={Object.keys(themes)}
              />
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
                  <Welcome />
                </Route>
              </Switch>
            </Router>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}
export default App;
