import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'isomorphic-fetch';


import routes from './routes';

const App = ({ name }) => (
  <div>
    <div>Hello <b>{name}</b></div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/feature-content">Users</Link></li>
    </ul>
    <Switch>
      {renderRoutes(routes)}
    </Switch>
  </div>
);

export default App;