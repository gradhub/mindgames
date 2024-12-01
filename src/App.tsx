  import './App.css';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Menu from './components/menu/Menu'
  import TikTakToe from './components/tikTakToe/TikTakToe';
  import Sudoku from './components/sudoku/Sudoku';
  import ModalComponent from './components/modal/ModalComponent';
  import TikTakToeGame from './components/tikTakToe/TikTakToeGame';
  import TikTakToeSettings from './components/tikTakToe/TikTakToeSettings';

  function App() {

    return (
      <BrowserRouter>
        <ModalComponent />
        
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/tik-tak-toe" element={<TikTakToe />} >
            <Route path="game" element={<TikTakToeGame />} />
            <Route path="settings" element={<TikTakToeSettings />} />
          </Route>
          <Route path="/sudoku" element={<Sudoku />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
