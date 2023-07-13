
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Fact from './Pages/Fact';

const App = () => {
  return (
    <div>
      <TodoList/>
  </div>
  )
};

export default App;