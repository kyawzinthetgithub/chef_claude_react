import React from "react";

export default function Main(){
    const [ingredients,setIngredients] = React.useState([]);

    function handleSubmit (e){
       e.preventDefault();
       const formData = new FormData(e.currentTarget);
       const newIngredient = formData.get('ingredient');
       if(newIngredient.length > 0 && newIngredient != '' && !ingredients.includes(newIngredient)){
        setIngredients(oldIngerdients => [...oldIngerdients,newIngredient]);
       }else{
        if(ingredients.includes(newIngredient)){
            alert('double action is dective!')
        }else{
            alert('please fill input field')
        }
       }
    }

    return (
        <>
            <main>
                <form onSubmit={handleSubmit} className="add-ingredient-form">
                    <input type="text" placeholder="e.g. oregano" name="ingredient" aria-label="Add ingredient" />
                    <button>Add ingredient</button>
                </form>
                <ul>
                {ingredients.map((ingredient,index)=>(
                    <li key={index}>{ingredient}</li>
                ))}
                </ul>
            </main>
        </>
    );
}