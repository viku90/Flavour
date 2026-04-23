import React from 'react'
import Navbar from './components/Navbar'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
   <div>
      <Navbar />
      <div >
        <Mainroutes />
      </div>
    </div>
  )
}

export default App