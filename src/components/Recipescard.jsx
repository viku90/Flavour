import React from 'react'
import { Link } from 'react-router-dom';

const Recipescard = (props) => {
  const {id,title,image,descrption,instruction} = props.recipes;
  return (
    <Link to={`/recipes/details/${id}`}>
     <div 
        className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 
        shadow-xl rounded-2xl p-5 w-[260px] 
        hover:shadow-2xl hover:scale-[1.04] transition-all duration-300"
      >

        {/* Image */}
        {image && (
          <img 
            src={image} 
            alt=""
            className="w-full h-[140px] object-cover rounded-xl mb-3"
          />
        )}

        {/* Title */}
        <h1 className="text-lg font-semibold text-white mb-2">
          {title}
        </h1>

        {/* Description */}
        <p className="text-sm text-zinc-400 mb-2 line-clamp-2">
          {descrption}
        </p>

        {/* Instruction */}
        <p className="text-xs text-zinc-500 line-clamp-2">
          {instruction}
        </p>

      </div>
      </Link>
  )
}

export default Recipescard