import React, { createContext, useEffect, useState } from 'react'

export const recipescontext = createContext(null);
const Recipescontext = (props) => {
const [data,setdata] = useState([]);

useEffect(() =>{
    setdata(JSON.parse(localStorage.getItem("recipe")) || []);
  },[])
  
  return (
    <recipescontext.Provider value={{data,setdata}}>{props.children}</recipescontext.Provider>
  )
}

export default Recipescontext