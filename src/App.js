import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import ListFilter from './components/ListFilter';
import Roadmap from './components/Roadmap';
import Header from './components/Header';
import Suggestions from './components/Suggestions';
import RequestsList from './components/RequestsList';
function App() {

  const [data, setData] = useState({
    'productRequests': [],
    'currentUser': {}
  })

  useEffect(() => {
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
      <div className="controls">
          <Header></Header>
          <ListFilter></ListFilter>
          <Roadmap></Roadmap>
        </div>
      <main>      
        <Suggestions></Suggestions>
        <RequestsList></RequestsList>
      </main>
    </div>
  );
}

export default App;
