import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import throttle from 'lodash/throttle';

import App from './components/App';
import store from './store';
import { saveState } from './helpers/localStorage';

store.subscribe( throttle(
    () => {
      console.log('store');
      saveState(store.getState())
    },
    1000
  )
);

const GlobalStyle = createGlobalStyle`
  *{
    outline: 1px solid red;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
    <GlobalStyle />
  </Provider>
  , document.getElementById('root')
);
