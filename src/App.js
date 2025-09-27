import logo from './logo.svg';
import './App.css';
// Import the function here
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

// import Routing Elements
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <h2>My Portfolio</h2>
      </header>
      <Routes>
        <Route/>

      </Routes>

    

</BrowserRouter>
    </div>
  );
}

export default App;
