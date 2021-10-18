import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import ListFilter from './components/ListFilter';
import Roadmap from './components/Roadmap';
import Header from './components/Header';
import Suggestions from './components/Suggestions';

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
      console.log(data)
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <main>
        <div className="controls">
          <Header></Header>
          <ListFilter></ListFilter>
          <Roadmap></Roadmap>
        </div>
        <Suggestions></Suggestions>
        <ul>
          <li>one</li>
          <li>one</li>
          <li>one</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
