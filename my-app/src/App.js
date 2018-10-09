import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

const App = () => {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL + '/'}>
        <div>
          <Route exact path="/" component={Main} />
        </div>
      </Router>
    </div>
  );
};

export default App;
