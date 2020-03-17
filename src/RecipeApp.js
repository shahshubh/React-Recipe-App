import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          id: 1,
          title: 'pizza',
          instructions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          ingredients: ['bread','cheese','chilli','toppings'],
          image: 'pizza.jpeg'
        },
        {
          id: 2,
          title: 'noodles',
          instructions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          ingredients: ['noodles','soya sauce','chilli sauce'],
          image: 'noodles.jpeg'
        },
        {
          id: 3,
          title: 'sandwich',
          instructions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          ingredients: ['breads','tomato','cheese','capsicum'],
          image: 'sandwich.jpeg'
        }
      ],
      nextRecipeId: 3,
    }

  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <RecipeInput />
        <RecipeList recipes={this.state.recipes} />
      </div>  
    );
  }
}

export default RecipeApp;
