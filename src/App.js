import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import './App.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';

const Page1 = () => <div className="page" style={{ backgroundImage: `url(${image1})`}} />;
const Page2 = () => <div className="page" style={{ backgroundImage: `url(${image2})`}} />;
const Page3 = () => <div className="page" style={{ backgroundImage: `url(${image3})`}} />;
const Page4 = () => <div className="page" style={{ backgroundImage: `url(${image4})`}} />;
const Page5 = () => <div className="page" style={{ backgroundImage: `url(${image5})`}} />;
const Footer = () => (
  <nav className="footer">
    <Link to='/'>쯔위</Link>
    <Link to='/2'>손나은</Link>
    <Link to='/3'>수지</Link>
    <Link to='/4'>아이유</Link>
    <Link to='/5'>설현</Link>
  </nav>
)

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/2" component={Page2} />
        <Route exact path="/3" component={Page3} />
        <Route exact path="/4" component={Page4} />
        <Route exact path="/5" component={Page5} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
