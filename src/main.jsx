import React from 'react'
import ReactDOM from 'react-dom/client'
import Nosotros from './ComponenteNosotros/Nosotros'
import Login from './ComponenteLogin/Login'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
    <Nosotros/>
  </React.StrictMode>,
)
