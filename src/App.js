import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Components/Form.js';
import Themes from './Components/Theme.js'
import Theme_1 from './Themes-pages/Theme 1/Theme.js'
import Theme_2 from './Themes-pages/Theme 2/Theme.js'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Resume Designer</h1>
        </header>
        <Routes>
          <Route index element={<Form />} />
          <Route path='themes' element={<Themes />} />
          <Route path='theme-1' element={<Theme_1 />} />
          <Route path='theme-2'  element={<Theme_2 />} />
          
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
