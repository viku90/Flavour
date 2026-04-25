import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 
    bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-800">

      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-white text-xl font-semibold">
          RecipeApp
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <NavLink to="/" className={({isActive}) =>
            `text-lg ${isActive ? "text-white border-b-2 border-orange-500 pb-1" : "text-zinc-400 hover:text-white"}`
          }>
            Home
          </NavLink>

          <NavLink to="/about" className={({isActive}) =>
            `text-lg ${isActive ? "text-white border-b-2 border-orange-500 pb-1" : "text-zinc-400 hover:text-white"}`
          }>
            About
          </NavLink>

          <NavLink to="/recipes" className={({isActive}) =>
            `text-lg ${isActive ? "text-white border-b-2 border-orange-500 pb-1" : "text-zinc-400 hover:text-white"}`
          }>
            Recipes
          </NavLink>

          <NavLink to="/create" className={({isActive}) =>
            `text-lg ${isActive ? "text-white border-b-2 border-orange-500 pb-1" : "text-zinc-400 hover:text-white"}`
          }>
            Create
          </NavLink>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white text-2xl">
            ☰
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6">

          <NavLink onClick={()=>setOpen(false)} to="/" className="text-zinc-300 hover:text-white">
            Home
          </NavLink>

          <NavLink onClick={()=>setOpen(false)} to="/about" className="text-zinc-300 hover:text-white">
            About
          </NavLink>

          <NavLink onClick={()=>setOpen(false)} to="/recipes" className="text-zinc-300 hover:text-white">
            Recipes
          </NavLink>

          <NavLink onClick={()=>setOpen(false)} to="/create" className="text-zinc-300 hover:text-white">
            Create
          </NavLink>

        </div>
      )}

    </div>
  )
}

export default Navbar