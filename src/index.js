import React from 'react'
import ReactDOMClient from 'react-dom/client'
import App from './App'
import './index.css'

const app = ReactDOMClient.createRoot(document.getElementById('root'))
app.render(<App />)
