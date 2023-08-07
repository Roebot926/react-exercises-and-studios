import styles from './Ingredients.module.css';


export default function RecipeIngredients(){
   const ingredients = ['1 cup (2 sticks|255 grams) plus 2 tablespoons unsalted butter','½ cup|120 ml canola oil','5 red onions, sliced ¼ inch|6 mm thick','5 Vidalia onions, sliced ¼ inch|6 mm thick','5 yellow onions, sliced ¼ inch|6 mm thick'];
   return(
    <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
        </ul>
    </div>
   )
}