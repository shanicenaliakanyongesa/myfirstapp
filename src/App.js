import logo from './logo.svg';
import './App.css';
// Import the function here
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>My Portfolio</h2>
      </header>

      <Home/>
      <About/>
      <Profile/>

    </div>
  );
}

export default App;
