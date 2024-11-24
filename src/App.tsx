import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu'
import TikTakToe from './components/TikTakToe/TikTakToe';
import Sudoku from './components/Sudoku/Sudoku';

function App() {
  
  useEffect(() => {
    console.log('APP')
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/tik-tak-toe" element={<TikTakToe />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
