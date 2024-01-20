import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.css'
import './ListadoApp.jsx'
import { ListadoApp } from './ListadoApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListadoApp/>
  </React.StrictMode>,
)
