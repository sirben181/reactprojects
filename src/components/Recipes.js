import style from './recipe.module.css'
const Recipes=({title,image,calories,ingredients})=>{
    return(
        <div className={style.recipe}>
          <h3>{title}</h3>
          <p>{calories}</p>
           <ol>
            {ingredients.map((ingredient)=>
            <li>{ingredient.text}</li>
            )}   
           </ol>
          <img src={image}  />
        </div>
    )
}
export default Recipes