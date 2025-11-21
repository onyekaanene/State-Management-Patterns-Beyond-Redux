/*

1. React Context API

What is it?

The Context API is a built-in React feature that allows you to share state across components without prop drilling.

When to Use It:

Small to medium-sized applications.

Situations where you don’t need advanced features like middleware or time-travel debugging.

Example:

This code uses React's Context API to create a ThemeProvider that manages a theme state (light or dark) and provides it to child components via a custom useTheme hook. The App component consumes this context to toggle the theme and dynamically adjust the background color.
*/

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// Usage
const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#fff' }}>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </div>
  );
};

/*
Pros:
Minimal setup.
No external dependencies.

Cons:
Performance issues when deeply nested components re-render unnecessarily.
*/