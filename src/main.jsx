import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import Recipescontext from './context/Recipescontext.jsx'

createRoot(document.getElementById('root')).render(
  <Recipescontext>
      <BrowserRouter>
              <App />
              <ToastContainer/>
      </BrowserRouter>
  </Recipescontext>
  
)
