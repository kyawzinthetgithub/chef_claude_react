import React, { useEffect, useRef } from "react";
import ClaudeRecipe from './ClaudeRecipe';
import IngredientList from "./IngredientList";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const recipeSection = useRef(null);
  
  useEffect(() => {
    if(recipeSection.current !== null){
      recipeSection.current.scrollIntoView({behavior:'smooth'});
    }
  },[recipeShown]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (
      newIngredient.length > 0 &&
      newIngredient != "" &&
      !ingredients.includes(newIngredient)
    ) {
      setIngredients((oldIngerdients) => [...oldIngerdients, newIngredient]);
    } else {
      if (ingredients.includes(newIngredient)) {
        alert("double action is dective!");
      } else {
        alert("please fill input field");
      }
    }
  }

  const getRecipe = () => {
    setRecipeShown((prevShown) => !prevShown);
  };

  return (
    <>
      <main>
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            name="ingredient"
            aria-label="Add ingredient"
          />
          <button>Add ingredient</button>
        </form>
        {ingredients.length > 0 ? (
          <IngredientList ref={recipeSection} ingredients={ingredients} getRecipe={getRecipe} />
        ) : null}
        {recipeShown ? (
          <ClaudeRecipe />
        ) : null}
      </main>
    </>
  );
}
