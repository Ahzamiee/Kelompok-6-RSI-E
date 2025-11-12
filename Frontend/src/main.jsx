import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css' // <-- PENTING: MENGIMPOR CSS ANDA

// Ini mengambil "wadah" root dari index.html dan me-render App.jsx Anda di dalamnya
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)