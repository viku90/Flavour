import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import Singlerecipes from '../pages/Singlerecipes'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/recipes/details/:id" element={<Singlerecipes/>}/>
            <Route path="/create" element={<Create/>}/>
        </Routes>
    </div>
  )
}

export default Mainroutes