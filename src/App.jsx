import { useEffect } from 'react';
import './App.css';
import SkipSelectorPage from './components/pages/SkipSelectorPage';
import ThemeToggleFloating from './components/ThemeToggleFloating';
import { applyThemeFromPreference } from './utils/theme';

function App() {
  useEffect(() => {
    applyThemeFromPreference();
  }, []);

  return (
    <>
      <ThemeToggleFloating />
      <SkipSelectorPage />
    </>
  );
}

export default App;
