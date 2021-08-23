import react from 'react'
import './App.css'
import Recipes from './components/Recipes'
import { useEffect,useState } from 'react'
  const App=()=>{
    const APP_ID='b0c43ad1'
    const APP_KEY= '49a4133f0213b6588f7632506767cc3e'
    const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const [recipes,setRecipes]=useState([])
    const [search,setSearch]=useState('')
    const [query,setQuery]=useState('beef')
    useEffect(()=>{
getRecipes();
    }, [query])
    const getRecipes=async()=>{
      const res=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data=await res.json();
    setRecipes (data.hits);
      // console.log(data.hits);
    }
    const updateSearch=e=>{
      setSearch(e.target.value)
      // console.log(search)
     }
    const getSearch=e=>{
      e.preventDefault();
      setQuery(search)
      setSearch('')

    }
   
   
    return(
<div className="App">
    <form className='search-form' onSubmit={getSearch}>
      <input type='text' className="search-bar" value={search} onChange={updateSearch}/>
      <button type='submit' className='search-button'>Search</button>
    </form>
    <div className="recipe">
        {recipes.map((recipe)=><Recipes title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
       />)}
       </div>
</div>
    )
  }
  export default App