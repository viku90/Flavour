import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import Singlerecipes from '../pages/Singlerecipes'
import Pagenoyfound from '../pages/Pagenoyfound'
import Fav from '../pages/Fav'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/recipes/details/:id" element={<Singlerecipes/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="*" element={<Pagenoyfound/>} />
            <Route path="/fav" element={<Fav />} />
        </Routes>
    </div>
  )
}

export default Mainroutes