import React from 'react';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import State from '../concepts/State';
import Effects from '../concepts/Effects';
import PropsDemo from '../concepts/PropsDemo';
import Hooks from '../concepts/Hooks';
import TimePiecesApp from '../../components/apps/timer-apps/TimePiecesApp';
import NytApp from '../apps/nyt-app/NytApp';
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';

export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      sidebar: () => <div>Home</div>,
      main: () => <Home />
    },
    {
      path: '/functionalcomponent',
      exact: true,
      main: () => <FunctionalComponentDemo />
    },
    {
      path: '/jsxrules',
      exact: true,
      main: () => <JSXRules />
    },
    {
      path: '/useState',
      exact: true,
      main: () => <State />
    },
    {
      path: '/useEffect',
      exact: true,
      main: () => <Effects />
    },
    {
      path: '/propsdemo',
      exact: true,
      main: () => <PropsDemo />
    },
    {
      path: '/hooks',
      exact: true,
      main: () => <Hooks />
    },
    {
      path: '/resources',
      exact: true,
      sidebar: () => <div>Works Cited</div>,
      main: () => <Resources />
    },
    {
      path: '/timer',
      exact: true,
      main: () => <TimePiecesApp />
    },
    {
      path: '/nytapp',
      exact: true,
      main: () => <NytApp />
    },
    {
      path: '/reactconceptlist',
      exact: true,
      main: () => <ReactConceptsApp />
    }
]