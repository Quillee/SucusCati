import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import logo from './resources/img/logo.svg';
import Home from './Home';
import '../resources/css/App.css';
import '../resources/css/succ.css';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} />
    </BrowserRouter>
  );
}

export default App;
