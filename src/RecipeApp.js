import React from 'react';
//import logo from './logo.svg';
import Recipe from './Recipe'
import Navbar from './Navbar'

import './RecipeApp.css';

function RecipeApp() {
  return (
    <div className="App">
      <Navbar />
      <Recipe 
        title="Pasta" 
        ingredients={['flour','water']}
        instructions="Mix ingredients"
        image="pasta.jpeg"
      />
    </div>  
  );
}

export default RecipeApp;
