import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// content
import Home from './routes/Home';
import Expearience from './routes/Expearience';
import NotFound from './routes/NotFound';

// common
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header/> */}
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/expearience" component={Expearience} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
