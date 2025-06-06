import { useEffect } from 'react';
import './App.css';
import SkipSelectorPage from './components/pages/SkipSelectorPage';
import ThemeToggle from './components/pages/ThemeToggle';



function App() {
  

  return (
    <>
      <ThemeToggle/>
      <SkipSelectorPage />
    </>
  );
}

export default App;
