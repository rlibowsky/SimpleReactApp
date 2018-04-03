import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';

// local imports
import './App.css';
import Landing from './components/landing.js';
import HomePage from './components/homePage.js';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <Container>
        <div>
          <div>
          {/* exact paths say exactly what the url must be to load that component */}
          <Route exact path="/" component={Landing}/>
          {/* regular paths will load the component as long as the url starts with the path */}
          <Route path="/homepage" component={HomePage}/>
          </div>
        </div>
        </Container>
    </BrowserRouter>
    
    );
  }
}

export default App;

