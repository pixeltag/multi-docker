import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Otherpage from "./OtherPage";
import Fib from "./Fib";


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={Otherpage} />
        </div>
      </div>
    </Router>

  );
}

export default App;
