import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StudioPage } from './pages';
import { AppWrapper } from './styles';

const HomePage = () => (
  <ul>
    <li>
      <Link to="/someuser/7893274327">Viewer</Link>
    </li>
    <li>
      <Link to="/someuser/7893274327?edit">Configurator</Link>
    </li>
    <li>
      <Link to="/someuser/7893274327?edit&file=index.js">Configurator</Link>
    </li>
  </ul>
);

export const App = () => (
  <Router>
    <AppWrapper>
      <Route exact path="/" component={HomePage} />
      <Route path="/:user/:id" component={StudioPage} />
    </AppWrapper>
  </Router>
);
