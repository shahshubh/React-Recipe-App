import React, { Component } from 'react';

import './RecipeInput.css';

class RecipeInput extends Component{    
    static defaultProps = {
        onClose(){}
    }
    constructor(props){
        super(props);
        this.state = {
            title: '',
            instructions: "",
            ingredients: [""],
            image: '' 
        };
        this.handleChange = this.handleChange.bind(this);
    }

    //handlechange will get browser event as a parameter so we pass e as a parameter
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        const {title,instructions,image,ingredients} = this.state;
        const {onClose} = this.props;
        let inputs = ingredients.map((ing,i) => (
            <div
                className="recipe-form-line"
                key={`ingredient-${i}`}
            >
                <label>
                    <input
                        className="recipe-ingredient-input"
                        type="text"
                        name={`ingredient-${i}`}
                        value={ing}
                        size={45}
                        autoComplete="off"
                        placeholder="Ingredient"
                        onChange={() => {}} />
                </label>
            </div>
        ));

        return(
            <div className="recipe-form-container">
                <form className="recipe-form" onSubmit={this.handleSubmit}>
                    <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                    >X</button>

                    <div className="recipe-form-line">
                        <label htmlFor="recipe-title-input">Title</label>
                        <input 
                            id="recipe-title-input"
                            key='title'
                            name='title'
                            type="text"
                            value={title}
                            size={42}
                            autoComplete="off"
                            onChange={this.handleChange} 
                        />
                    </div>

                    <label htmlFor="recipe-instructions-input" style={{marginTop: '5px'}}>Instructions</label>
                    <textarea   
                        id="recipe-instructions-input"
                        key='instructions'
                        name='instructions'
                        type="Instructions"
                        value={instructions}
                        rows= '8'
                        cols= '50'
                        autoComplete="off"
                        onChange={this.handleChange} 
                    />
                    {inputs}
                    <button 
                        type="button"
                        onClick={this.handleNewIngredient}
                        className="buttons"
                        className="plus-button"
                    > + </button>

                    <div className="recipe-form-line">
                        <label htmlFor="recipe-image-input">Image Url</label>
                        <input 
                            id="recipe-image-input"
                            placeholder=''
                            name='image'
                            type="text"
                            value={image}
                            size={36}
                            autoComplete="off"
                            onChange={this.handleChange} 
                        />
                    </div>
                    <button 
                        type="submit"
                        className="buttons"
                        style={{alignSelf: 'flex-end', marginRight: 0}}
                    > SAVE </button>
                </form>
            </div>
        )
    }
}   

export default RecipeInput;


