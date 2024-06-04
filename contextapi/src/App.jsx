import React, { useContext } from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from './store/ThemeProvider';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div id='container' className={theme}>
      <Page />
    </div>
  );
}

export default App;
