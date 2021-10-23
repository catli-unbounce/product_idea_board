import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import {filterRequestsByStatus} from './helpers.js';
import backIcon from './assets/shared/icon-arrow-left.svg';
import './App.scss';
import ListFilter from './components/ListFilter';
import Roadmap from './components/Roadmap';
import Header from './components/Header';
import Suggestions from './components/Suggestions';
import RequestsList from './components/RequestsList';
import RequestForm from './components/RequestForm'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [data, setData] = useState({
    'all': [],
    'currentUser': {},
    'suggestions': [],
    'planned': [],
    'live': [],
    'inProgress':[]
  })

  useEffect(() => {
    
    async function fetchData() {
      const response = await fetch('/data.json');
      const fetchedData = await response.json(response);
      setData({
        all: fetchedData.productRequests,
        currentUser: fetchedData.currentUser,
        suggestions: filterRequestsByStatus(fetchedData.productRequests, 'suggestion'),
        planned: filterRequestsByStatus(fetchedData.productRequests, 'planned'),
        live: filterRequestsByStatus(fetchedData.productRequests, 'live'),
        inProgress: filterRequestsByStatus(fetchedData.productRequests, 'in-progress')
      });
    }
    fetchData();
  }, []);
  return (
    
      <Router>
        <Switch>
          <Route path="/new">
            <div className="back-link"><img alt="go back" src={backIcon}></img><Link to="/"><a>Go Back</a></Link></div>
            <div className="container">
              <RequestForm></RequestForm>
            </div>
          </Route>
          <Route path="/">
            <div className="container">
              <div className="controls">
                <Header></Header>
                <ListFilter></ListFilter>
                <Roadmap></Roadmap>
              </div>

              <div className="controls-mobile">
                <ListFilter></ListFilter>
                <Roadmap></Roadmap>
              </div>
              <main>      
                <Suggestions></Suggestions>
                <RequestsList productRequests={data.suggestions}></RequestsList>
              </main>
            </div>
          </Route>
        </Switch>
      </Router>
    

  );
}

export default App;
