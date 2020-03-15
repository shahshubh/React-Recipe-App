import React ,{Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component{
    static defaultProps ={
        recipes: [
            {
                title: 'pizza',
                instructions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                ingredients: ['bread','cheese','chilli','toppings'],
                image: 'pizza.jpeg'
            },
            {
                title: 'noodles',
                instructions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                ingredients: ['noodles','soya sauce','chilli sauce'],
                image: 'noodles.jpeg'
            },
            {
                title: 'sandwich',
                instructions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                ingredients: ['breads','tomato','cheese','capsicum'],
                image: 'sandwich.jpeg'
            }
        ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }

    render(){
        const recipes = this.props.recipes.map((r,index) => (
            <Recipe key={index} {...r} />
        ));
        return(
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;