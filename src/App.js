import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import suggestionIcon from './assets/suggestions/icon-suggestions.svg'
import {filterRequestsByStatus} from './helpers.js';
import backIcon from './assets/shared/icon-arrow-left.svg';
import './App.scss';
import ListFilter from './components/ListFilter';
import Roadmap from './components/Roadmap';
import Header from './components/Header';
import Banner from './components/Banner';
import RequestsList from './components/RequestsList';
import RequestForm from './components/RequestForm';
import RoadmapList from './components/RoadmapList';

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
    'banner': [],
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
        banner: filterRequestsByStatus(fetchedData.productRequests, 'suggestion'),
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
          <Route path="/roadmap">
            <RoadmapList></RoadmapList>
          </Route>
          <Route path="/">
            <div className="container">
              <div className="controls">
                <Header></Header>
                <ListFilter></ListFilter>
                <Roadmap planned={data.planned} inProgress={data.inProgress} live={data.live}></Roadmap>
              </div>

              <div className="controls-mobile">
                <ListFilter></ListFilter>
                <Roadmap planned={data.planned} inProgress={data.inProgress} live={data.live}></Roadmap>
              </div>
              <main>      
                <Banner>
                  <img src={suggestionIcon} alt="banner icon"></img> Suggestions
                  <span className="sort-by">Sort By:</span>
                  <ul className="banner__sort-dropdown dropdown">
                      <li className="select-input">Most Upvotes</li>
                      <li className="select-input">Least Upvotes</li>
                      <li className="select-input">Most Comments</li>
                      <li className="select-input">Least Comments</li>
                  </ul>
                </Banner>
                <RequestsList productRequests={data.banner}></RequestsList>
              </main>
            </div>
          </Route>
        </Switch>
      </Router>
    

  );
}

export default App;
