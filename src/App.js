import React, { useState, useEffect } from 'react';
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
import EditRequestForm from './components/EditRequestsForm';
import {
  Switch,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
function App() {
  let history = useHistory();
  const [data, setData] = useState({
    'all': [],
    'currentUser': {},
    'suggestions': [],
    'planned': [],
    'live': [],
    'inProgress':[],
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
      });
    }
    fetchData();
  }, []);

  useEffect(() => { 
    displaySuggestions();
  }, [filters]);

  useEffect(() => { 
    const suggestionsList = filterRequestsByStatus(data.all, 'suggestion');
    setData({
      ...data,
      suggestions: suggestionsList
    })
  }, [data.all]);

  const addNewRequest = (request) => {
    const listOfRequests = [...data.suggestions];
    listOfRequests.push(request);
    setData({
      ...data,
      suggestions: listOfRequests
    })
  }


  // const deleteRequest = (request_id) => {
    
  // }

  const sortSuggestions = (order) => {
    setSortOrder(order)
  }

  const updateFilters = (filter) => {

    let activeFilters = [...filters];
    if(activeFilters.includes(filter)) {
      activeFilters = activeFilters.filter((item) => item !== filter)
    } else {
      activeFilters.push(filter)
    }
    setFilters(activeFilters);
  }

  const sortMenu = () => sortOrders.map((item) => {
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
  
  const displaySuggestions = () => {
    let filteredSuggestions = [...data.suggestions];
    if(!filters.includes('all')) {
      filteredSuggestions = filterRequestsByCategory([...data.suggestions], filters);
    }
    return sortRequests(filteredSuggestions, sortOrder);
  }

  const editRequest = (requestItem) => {
    const newSuggestionsList = data.all.map((item) => {
      return item.id === requestItem.id ? requestItem : item;
    });

    setData({
      ...data,
      all: newSuggestionsList
    })
  }

  const upvote = (requestId, vote) => {
    
    const requestItem = data.all.filter((item) => item.id === requestId)[0];
    requestItem.upvotes = requestItem.upvotes + vote;
    const newSuggestionsList = data.all.map((item) => {
      return item.id === requestId ? requestItem : item;
    });

    setData({
      ...data,
      all: newSuggestionsList
    })
  }

  const addComment = (requestItem, comment) => {
    const commentObject = {
      content: comment,
      id: Math.floor(Math.random() * 10000),
      user: {
        image: './assets/user-images/image-suzanne.jpg',
        name: "Catherine Li",
        username: "code_monkey"
      }
    }
    const commentsList = [...requestItem.comments]
    commentsList.push(commentObject);
    const newRequestItem = {
      ...requestItem,
      comments: commentsList
    }

    const newSuggestionsList = data.all.map((item) => {
      return item.id === requestItem.id ? newRequestItem : item;
    });

    setData({
      ...data,
      all: newSuggestionsList
    })
  }

  const sortOrderDisplay = sortOrders.filter((item) => item.key === sortOrder)[0].title;

  return (
        <Switch>
          <Route path="/requests/:request_id/edit">
            {data.all &&
            <>
              <div className="go-back request-form__nav"><img alt="go back" src={backIcon}></img><a href="#" onClick={()=> history.goBack()}>Go Back</a></div>
              <div className="container">
                <EditRequestForm allRequests={data.all} editRequest={editRequest}></EditRequestForm>
              </div>
            </>
              
            }
          </Route>
          <Route path="/requests/:request_id">
            {data.all &&
              <RequestDetails upvote={upvote} allRequests={data.all} addComment={addComment}></RequestDetails>
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
              upvote={upvote}
            ></RoadmapList>
          </Route>
          <Route path="/">
            <div className="container">
              <div className="controls">
                <Header></Header>
                <ListFilter filters={filters} filterRequests={updateFilters}></ListFilter>
                <Roadmap planned={data.planned} inProgress={data.inProgress} live={data.live} upvote={upvote}></Roadmap>
              </div>

              <div className="controls-mobile">
                <ListFilter filters={filters} filterRequests={updateFilters}></ListFilter>
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
                <RequestsList productRequests={displaySuggestions()} upvote={upvote}></RequestsList>
              </main>
            </div>
          </Route>
        </Switch>
  );
}

export default App;
