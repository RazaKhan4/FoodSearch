import React, { useState } from 'react';
import Axios from 'axios';
import Recipe from './components/Recipe';
import {v4 as uuidv4} from 'uuid';
import Alert from './components/Alert';
import Footer from './components/Footer';


const App=()=>{

  const[query,setQuery]=useState("")
  const[recipes,setRecipes]=useState([])
  const[alert,setAlert]=useState("")


  const APP_ID="b4d5d6bd";
  const APP_KEY="a5fc84f0ad6545ee04d4be540f4646c6";
  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
 
 
 const getData=async()=>
  {
        if(query !== "")
                {
                       const result=await Axios.get(url)
        if(!result.data.more)
                    {
                       return setAlert('No Food With Such Name')
                    }
                       setRecipes(result.data.hits)  
                       console.log(result);
                       setAlert("");
                       setQuery("")
                }

        else 
               {
                       setAlert("Please fill the form")
               }
}
  
  const onSubmit=(e)=>
    {
       e.preventDefault();
       getData()
    }

  const onChange=(e)=>
    {
       console.log(e.target.value)
       setQuery(e.target.value)
    }

  return (
    <>
     
    <div className="App" >
        
              <h1 >FOOD SEARCHING </h1>

                  <form onSubmit={onSubmit} className="search-form">
                        {alert !== "" &&  <Alert  alert={alert}/>}
                        <input type="text"
                               placeholder="Search Food" 
                               autoComplete="off"
                               onChange={onChange}
                               value={query}
                               className="inputField"
                        />
                        <input type="submit" value="search" /> 
                  </form>
      <div className="recipes">
                {recipes !== [] && recipes.map (recipe => <Recipe recipe={recipe} key={uuidv4()} />)}
               
      </div>
     
      <Footer />
    </div>
  
      
     
    </>
         );
}
export default App;
