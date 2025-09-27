import logo from './logo.svg';
import './App.css';
// Import the function here
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

// import Routing Elements
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Component1 from './components/Component1';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <h2>My Portfolio</h2>
        <nav>
          <Link to="/" className='navlink'>Home</Link>
          <Link to="/about" className='navlink'>About</Link>
          <Link to="/profile" className='navlink'>Profile</Link>
          <Link to="/hooks" className='navlink'>React Hooks</Link>
        </nav>

      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/hooks' element={<Component1/>}/>
      </Routes>

    

</BrowserRouter>
    </div>
  );
}

export default App;
