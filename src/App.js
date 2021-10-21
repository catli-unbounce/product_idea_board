import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import {filterForSuggestions} from './helpers.js';
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
    'productRequests': [],
    'currentUser': {}
  })

  useEffect(() => {
    filterForSuggestions();
    async function fetchData() {
      const response = await fetch('/data.json');
      const fetchedData = await response.json(response);
      setData({
        productRequests: fetchedData.productRequests,
        currentUser: fetchedData.currentUser
      });
      
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/new">
            <RequestForm></RequestForm>
          </Route>
          <Route path="/">
            <div className="controls">
              <Header></Header>
              <ListFilter></ListFilter>
              <Roadmap></Roadmap>
            </div>
            <main>      
              <Suggestions></Suggestions>
              <RequestsList productRequests={data.productRequests}></RequestsList>
            </main>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
