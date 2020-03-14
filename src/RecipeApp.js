import React from 'react';
//import logo from './logo.svg';
import Recipe from './Recipe'
import './RecipeApp.css';

function RecipeApp() {
  return (
    <div className="App">
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
