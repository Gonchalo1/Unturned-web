import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 


import Home from './Home/home';
import Option1 from './Option1/option1';
import Option2 from './Option2/option2';
import Contact from './Contact/contact';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/option1' element={<Option1/>}></Route>
          <Route path='/option2' element={<Option2/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
