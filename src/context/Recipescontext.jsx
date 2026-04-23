import React, { createContext, useState } from 'react'

export const recipescontext = createContext(null);
const Recipescontext = (props) => {
const [data,setdata] = useState([]);
  return (
    <recipescontext.Provider value={{data,setdata}}>{props.children}</recipescontext.Provider>
  )
}

export default Recipescontext