import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MenuBar from './components/MenuBar.js'
import Routes from '../src/routes'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MenuBar />
        <Routes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
