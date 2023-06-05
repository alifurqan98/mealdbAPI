import React from 'react';


function RecipeList({ recipe }) {
    
    const {idMeal,
        strMeal,
        strCategory,
        strMealThumb,} = recipe;
    return (
        <div className="card">
          <div>
                <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
                    />
        </div>
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <button className='btn'><a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Ingredients</a></button>
            </div>
        </div>
  )
}

export default RecipeList
