import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <h1>French Onion Soup</h1>
                    <p>Matty Matheson's perfect French onion soup includes SIX kinds of onions and the results are perfect.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    };
}; 

function RecipeAuthor(){
    const authorLink = 'https://www.vice.com/en/topic/matty-matheson';
    const authorPhoto = 'https://i.pinimg.com/736x/4d/ed/c2/4dedc2c523cea8f31ef0cb7662974773.jpg';
    const authorName = 'Matty Matheson';

    return(
        <div className = {StyleSheet.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Matty Matheson" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Vice Recipes</a>
            </div>

        </div>
    )
}

export default RecipeDescription;