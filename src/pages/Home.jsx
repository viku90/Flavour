import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-white">

      {/* HERO SECTION WITH INDIAN FOOD BACKGROUND */}
      <section 
        className="h-[90vh] flex flex-col items-center justify-center text-center px-6 
        bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1604908176997-4310c1d1b5a3')"
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            स्वादिष्ट Recipes 🍛
          </h1>

          <p className="text-zinc-300 max-w-xl mb-6">
            Discover, create, and enjoy authentic Indian recipes with a modern experience.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/recipes" 
              className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition"
            >
              Explore Recipes
            </Link>

            <Link 
              to="/create" 
              className="px-6 py-2 rounded-lg border border-zinc-400 hover:bg-zinc-800 transition"
            >
              Create Recipe
            </Link>
          </div>
        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          This app helps you organize your favorite Indian dishes, from spicy curries to delicious street food.
        </p>

        <Link to="/about" className="inline-block mt-4 text-orange-400 hover:underline">
          Read more →
        </Link>
      </section>

      {/* RECIPES SECTION */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Recipes</h2>
        <p className="text-zinc-400 mb-6">
          Browse all your saved recipes in one place.
        </p>

        <Link to="/recipes" className="px-6 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700">
          View Recipes
        </Link>
      </section>

      {/* CREATE SECTION */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Create</h2>
        <p className="text-zinc-400 mb-6">
          Add your own recipes and build your collection.
        </p>

        <Link to="/create" className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600">
          Create Now
        </Link>
      </section>

    </div>
  )
}

export default Home