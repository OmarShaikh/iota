import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Assets/Styles/index.css';
import App from './App';

import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>
);
