// import React from 'react';
import './App.css';
import { LandingPageHeader } from './components/Header/LandingPageHeader';
// import {Logo} from './components/Header/Logo';
import { Hero } from './components/Hero';
//import './money.css';

export function App() {
  return (
    <div>
      <LandingPageHeader />
      <Hero />
    </div>
  );
}

export default App;

// Component name must be pascal case
//e.g NavigationBar not navigationBar or navigation-bar or navigation_bar

//two reason App function is a component
//1. it rturns JSX, and the naming is PascalCase
