import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.css'
import './ListadoApp.jsx'
import { UserApp } from './UserApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserApp/>
  </React.StrictMode>,
)
