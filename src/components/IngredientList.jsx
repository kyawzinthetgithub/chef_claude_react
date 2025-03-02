export default function IngredientList ({ingredients,getRecipe,ref}){
    return (
        <>
            <section>
            <h2>Ingredient on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            {ingredients.length > 3 && (
              <div ref={ref} className="get-recipe-container">
                <div>
                  <h3>Ready for recipe</h3>
                </div>
                <button onClick={getRecipe}>Get Recipe</button>
              </div>
            )}
          </section>
        </>
    );
}