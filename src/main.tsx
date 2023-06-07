import React from 'react'
import ReactDOM from 'react-dom/client'
import {Global} from './Global.style.ts'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>,
)
