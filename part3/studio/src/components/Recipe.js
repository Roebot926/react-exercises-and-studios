const RecipeAuthor = () => {
   let authorLink = "https://thesimplesprinkle.com/brocks-lazy-boy-no-chew-stew-from-pokemon/";
   let authorPhoto = "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/11/Featured-Image-Brock-and-His-Drying-Pan-Cropped.jpg";
   let authorName = "Brock Harrison";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["1 tablespoon olive oil", "300 g vegan chicken pieces ", "½ yellow onion, finely chopped", "2 cloves of garlic, minced", "3 carrots, chopped"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Brock's Lazy Boy No Chew Stew</h1>
            <p>Cream stew, also referred to as a white stew, is a popular Yōshoku dish consisting of traditional meat (chicken or pork), mixed vegetables, onion, carrot, and potato (and cabbage)</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://thesimplesprinkle.com/wp-content/uploads/2022/11/brocks-lazy-boy-no-chew-stew-pokemon-blog-11.jpg" alt="Lazy Boy No Chew Stew" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}