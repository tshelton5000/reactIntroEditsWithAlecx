import React from 'react';

import {
  Route,
  Link
} from 'react-router-dom'

import { routes } from './_routes';

const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to="/jsxrules">JSX Rules</Link></li>
        <li><Link to="/useState">useState</Link></li>
        <li><Link to="/useEffect">useEffect</Link></li>
        <li><Link to="/propsdemo">Props Demo</Link></li>
        <li><Link to="/hooks">Hooks</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/timer">Timers</Link></li>
        <li><Link to="/nytapp">NYT App</Link></li>
        <li><Link to="/reactconceptlist">React Concepts Checklist</Link></li>

      </ul>
    </div>
    <div className="sidebar-route">
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </div>
)

export default Sidebar;