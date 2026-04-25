import React, { useContext } from 'react'
import { recipescontext } from '../context/Recipescontext'

const Recipes = () => {
  const { data } = useContext(recipescontext);

  const recipesshow = data.map((recipes) => {
    return (
      <div 
        key={recipes.id}
        className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 
        shadow-xl rounded-2xl p-5 w-[260px] 
        hover:shadow-2xl hover:scale-[1.04] transition-all duration-300"
      >

        {/* Image */}
        {recipes.image && (
          <img 
            src={recipes.image} 
            alt=""
            className="w-full h-[140px] object-cover rounded-xl mb-3"
          />
        )}

        {/* Title */}
        <h1 className="text-lg font-semibold text-white mb-2">
          {recipes.title}
        </h1>

        {/* Description */}
        <p className="text-sm text-zinc-400 mb-2 line-clamp-2">
          {recipes.descrption}
        </p>

        {/* Instruction */}
        <p className="text-xs text-zinc-500 line-clamp-2">
          {recipes.instruction}
        </p>

      </div>
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