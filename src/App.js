import logo from './logo.svg';
import './App.scss';
import ListFilter from './components/ListFilter';
import Roadmap from './components/Roadmap'
function App() {
  return (
    <div className="App">
      <main>
        <div class="controls">
          <ListFilter></ListFilter>
          <Roadmap></Roadmap>
        </div>
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
