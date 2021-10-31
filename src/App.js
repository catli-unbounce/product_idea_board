import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import suggestionIcon from './assets/suggestions/icon-suggestions.svg'
import {filterRequestsByStatus, sortRequests, filterRequestsByCategory} from './helpers.js';
import {sortOrders} from './static.js';
import backIcon from './assets/shared/icon-arrow-left.svg';
import checkmarkIcon from './assets/shared/icon-check.svg';
import './App.scss';
import ListFilter from './components/ListFilter';
import Roadmap from './components/Roadmap';
import Header from './components/Header';
import Banner from './components/Banner';
import RequestsList from './components/RequestsList';
import RequestForm from './components/RequestForm';
import RoadmapList from './components/RoadmapList';
import RequestDetails from './components/RequestDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useRouteMatch,
  useParams
} from "react-router-dom";
function App() {
  let history = useHistory();
  let match = useRouteMatch();
  const [data, setData] = useState({
    'all': [],
    'currentUser': {},
    'suggestions': [],
    'planned': [],
    'live': [],
    'inProgress':[],
    'filteredSuggestions': []
  })

  const [sortOrder, setSortOrder] = useState('votes_desc');
  const [filters, setFilters] = useState(['all']);
  const [showMenu, setShowMenu] = useState(false);
 
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
        inProgress: filterRequestsByStatus(fetchedData.productRequests, 'in-progress'),
        filteredSuggestions: filterRequestsByStatus(fetchedData.productRequests, 'suggestion'),
      });
    }
    fetchData();
  }, []);

  const addNewRequest = (request) => {

  }

  const deleteRequest = (request_id) => {
    
  }

  const sortSuggestions = (order) => {
    setData({
      ...data,
      filteredSuggestions: sortRequests(data.suggestions, order)
    });
    setSortOrder(order)
  }

  const filterRequests = (filter) => {

    let activeFilters = [...filters];
    if(activeFilters.includes(filter)) {
      activeFilters = activeFilters.filter((item) => item !== filter)
    } else {
      activeFilters.push(filter)
    }
    let filteredSuggestions = [];
    if(activeFilters.includes('all')) {
      filteredSuggestions= [...data.suggestions];
    } else {
      filteredSuggestions = filterRequestsByCategory(data.suggestions, activeFilters);
    }
    
    setData({...data, filteredSuggestions: filteredSuggestions})
    setFilters(activeFilters);
  }
  const sortMenu = () => {
    return sortOrders.map((item) => {

      if(sortOrder === item.key) {
        return (
          <li onClick={() => sortSuggestions(item.key)} className="select-input">{item.title}<img alt="checkmark" src={checkmarkIcon}></img></li>
        )
      } else {
        return (
          <li onClick={() => sortSuggestions(item.key)} className="select-input">{item.title}</li>
        )
      }
      
    })
  }

  const sortOrderDisplay = sortOrders.filter((item) => item.key === sortOrder)[0].title;

  return (
        <Switch>
          <Route path="/requests/:request_id">
            {data.all &&
              <RequestDetails allRequests={data.all}></RequestDetails>
            }
          </Route>
          <Route path="/new">
            <div className="go-back request-form__nav"><img alt="go back" src={backIcon}></img><a href="#" onClick={()=> history.goBack()}>Go Back</a></div>
            <div className="container">
              <RequestForm addNewRequest={addNewRequest}></RequestForm>
            </div>
          </Route>
          <Route path="/roadmap">
            <RoadmapList
              planned={data.planned} 
              inProgress={data.inProgress} 
              live={data.live}
            ></RoadmapList>
          </Route>
          <Route path="/">
            <div className="container">
              <div className="controls">
                <Header></Header>
                <ListFilter filters={filters} filterRequests={filterRequests}></ListFilter>
                <Roadmap planned={data.planned} inProgress={data.inProgress} live={data.live}></Roadmap>
              </div>

              <div className="controls-mobile">
                <ListFilter filters={filters} filterRequests={filterRequests}></ListFilter>
                <Roadmap planned={data.planned} inProgress={data.inProgress} live={data.live}></Roadmap>
              </div>
              <main>      
                <Banner>
                  <img src={suggestionIcon} alt="banner icon"></img> Suggestions
                  <span onClick={() => setShowMenu(!showMenu)} className="sort-by">Sort By: <span className="sort-order">{sortOrderDisplay}</span></span>
                  {showMenu &&
                    <ul className="banner__sort-dropdown dropdown">
                      {sortMenu()}
                    </ul>
                  }
                  
                </Banner>
                <RequestsList productRequests={data.filteredSuggestions}></RequestsList>
              </main>
            </div>
          </Route>
        </Switch>
  );
}

export default App;
