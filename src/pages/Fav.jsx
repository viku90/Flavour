import React, { useContext, useEffect } from 'react'
import { recipescontext } from '../context/Recipescontext'
import Recipescard from '../components/Recipescard';

const Fav = () => {
  const data = JSON.parse(localStorage.getItem("Fav")) || [];
  const singledata = JSON.parse(localStorage.getItem("recipe")) || [];



  const recipesshow = data.map((fav) => {
    return (
     <Recipescard key={fav.id} recipes={fav} />
    )
  })

  return (
    <div className="min-h-screen pt-24
    bg-gradient-to-br from-black via-zinc-950 to-zinc-900 
    flex flex-wrap gap-6 p-8 justify-center">
      
      {data.length > 0 ? recipesshow : "Not Found !!!"}

    </div>
  )
}

export default Fav