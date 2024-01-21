import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.css'
import './ListadoApp.jsx'
import { UserApp } from './UserApp.jsx'
import { ListadoApp } from './ListadoApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-cyan-500 hover:bg-cyan-600 transition-500 rounded py-1 px-2 flex flex-col">
      <ListadoApp />
    </div>
    <div className='bg-cyan-700 hover:bg-cyan-600 transition-500 rounded py-1 px-2 flex flex-col'>
       <UserApp />
    </div>
   
  
    
  </React.StrictMode>,
)
