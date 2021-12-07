import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Request from './Request.js';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="App-header">
          <h2>Project 4</h2>
        </div>
        <div>
          <Routes>
            {/* <Route path="/" element={}/> */}
            <Route path="/request" element={<Request/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
