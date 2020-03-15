import React from 'react';
//import logo from './logo.svg';
import Navbar from './Navbar'
import RecipeList from './RecipeList'

import './RecipeApp.css';

function RecipeApp() {
  return (
    <div className="App">
      <RecipeList />
    </div>  
  );
}

export default RecipeApp;
