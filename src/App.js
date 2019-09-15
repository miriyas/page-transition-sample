import React, { useContext } from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { PageTransContext } from './contexts/pageTransContext';
import Footer from './Footer';

import './App.scss';
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

const history = createBrowserHistory()

function App() {
  let { pageTrans } = useContext(PageTransContext)

  const classNames = {
    appear: `${pageTrans} appear`,
    appearActive: `${pageTrans} appear active`,
    appearDone: `${pageTrans} appear done`,
    enter: `${pageTrans} enter`,
    enterActive: `${pageTrans} enter active`,
    enterDone: `${pageTrans} enter done`,
    exit: `${pageTrans} exit`,
    exitActive: `${pageTrans} exit active`,
    exitDone: `${pageTrans} exit done`
  }

  return (
    <Router history={history}>
      <Route
        render={({ location }) => (
          <TransitionGroup className='transitionGroup'>
            <CSSTransition key={location.pathname} classNames={classNames} timeout={200}>
              <Switch location={location}>
                <Route exact path="/" component={Page1} />
                <Route exact path="/2" component={Page2} />
                <Route exact path="/3" component={Page3} />
                <Route exact path="/4" component={Page4} />
                <Route exact path="/5" component={Page5} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      <Footer />
    </Router>
  );
}

export default App;
