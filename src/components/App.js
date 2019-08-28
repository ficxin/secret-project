import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import Gallery from './Gallery';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
      </ScrollToTop>
    </Router>
  );
}

export default App;
