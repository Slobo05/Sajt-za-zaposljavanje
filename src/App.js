import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Povez from './povezivanje/Povez';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Povez />
      </Router>
    </div>
  );
}

export default App;
