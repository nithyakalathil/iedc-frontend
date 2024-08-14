import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Event from './components/Event';
import Contact from './components/Contact';

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Events' element={<Event/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
