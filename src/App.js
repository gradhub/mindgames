import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
