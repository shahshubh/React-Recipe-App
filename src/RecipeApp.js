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
          id: 0,
          title: 'pizza',
          instructions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          ingredients: ['bread','cheese','chilli','toppings'],
          image: 'pizza.jpeg'
        },
        {
          id: 1,
          title: 'noodles',
          instructions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          ingredients: ['noodles','soya sauce','chilli sauce'],
          image: 'noodles.jpeg'
        },
        {
          id: 2,
          title: 'sandwich',
          instructions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          ingredients: ['breads','tomato','cheese','capsicum'],
          image: 'sandwich.jpeg'
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe){
    this.setState((prevState,props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id){
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render(){
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        { showForm ? 
            <RecipeInput  
              onSave={this.handleSave} 
              onClose={() => this.setState({showForm: false})}
            /> : 
            null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>  
    );
  }
}

export default RecipeApp;
