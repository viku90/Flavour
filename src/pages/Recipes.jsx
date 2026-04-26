import React, { useContext } from 'react'
import { recipescontext } from '../context/Recipescontext'
import Recipescard from '../components/Recipescard';

const Recipes = () => {
  const { data } = useContext(recipescontext);

  const recipesshow = data.map((recipes) => {
    return (
     <Recipescard key={recipes.id} recipes={recipes} />
    )
  })

  return (
    <div className="min-h-screen pt-24
    bg-gradient-to-br from-black via-zinc-950 to-zinc-900 
    flex flex-wrap gap-6 p-8 justify-center">
      
      {recipesshow}

    </div>
  )
}

export default Recipes