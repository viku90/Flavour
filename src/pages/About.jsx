import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-6 
    bg-gradient-to-br from-black via-zinc-950 to-zinc-900 
    text-white flex flex-col items-center">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 tracking-tight">
        About Recipe App
      </h1>

      {/* Card */}
      <div className="max-w-3xl bg-zinc-900/80 backdrop-blur-xl 
      border border-zinc-800 rounded-2xl shadow-2xl p-8">

        <p className="text-zinc-300 leading-relaxed mb-4">
          Welcome to <span className="text-white font-semibold">Recipe App</span> — 
          a simple and modern platform where you can create, explore, and manage your favorite recipes.
        </p>

        <p className="text-zinc-400 leading-relaxed mb-4">
          This app is built using <span className="text-orange-400">React</span> and 
          <span className="text-orange-400"> Tailwind CSS</span>, focusing on clean UI, 
          smooth experience, and modern design principles.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          You can add recipes with images, descriptions, and instructions — 
          making it easy to organize your cooking ideas in one place.
        </p>

      </div>

      {/* Features */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5 text-center hover:scale-105 transition">
          <h2 className="text-lg font-semibold mb-2">Create Recipes</h2>
          <p className="text-zinc-400 text-sm">
            Add your own recipes with images and instructions.
          </p>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5 text-center hover:scale-105 transition">
          <h2 className="text-lg font-semibold mb-2">Explore</h2>
          <p className="text-zinc-400 text-sm">
            View all your saved recipes in a clean layout.
          </p>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5 text-center hover:scale-105 transition">
          <h2 className="text-lg font-semibold mb-2">Modern UI</h2>
          <p className="text-zinc-400 text-sm">
            Enjoy a sleek dark theme with smooth interactions.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About