import logo from './logo.svg';
import './App.scss';
import ListFilter from './components/ListFilter';
import Roadmap from './components/Roadmap';
import Header from './components/Header';
import Suggestions from './components/Suggestions';
function App() {
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
