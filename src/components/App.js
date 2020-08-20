import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    
    font-family: 'Open Sans', sans-serif;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Route exact path='/' component={Home} />
      <Route exact path='/:id' component={Detail} />
    </Router>
  );
}

export default App;
