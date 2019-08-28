import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Gallery from './Gallery';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
    </Router>
  );
}

export default App;
