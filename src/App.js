import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import RecipeList from "./Components/RecipeList";
import Heading from './Components/Heading';


function App() {

  console.log("Render App")

  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");


  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const searchRecipes = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    setRecipes(data.meals);
    setLoading(false);
    setQuery("");
  } 


  useEffect(() => {
    searchRecipes();
   },[])

  // const getQuery = (query) => {
  //   setQuery(query)
  // }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes();
    setTitle(query)
    
  }
  return (
    <div className="container">
      <h1>Search Food Recipe </h1>
      {/* <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
      /> */}

      <SearchBar
        query = {query}
        // getQuery={getQuery}
        handleSubmit={handleSubmit}
        onChange={changeHandler}
        isLoading={isLoading}
        
      />

        <Heading title={title} />


      <div className="recipes">     
        {recipes ? recipes.map(recipe => (

          <RecipeList
             key={recipe.idMeal}
            recipe={recipe}
            query = {query}
          />
          
        )) : "No Results."}
      </div>
    </div>
    );
}

export default App;
