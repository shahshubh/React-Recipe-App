import React ,{Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component{
    render(){
        const recipes = this.props.recipes.map((r,index) => (
            <Recipe key={r.id} {...r} />
        ));
        return(
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}


RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RecipeList;