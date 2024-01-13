import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        
        <Route path="e" element={<h2>Главная</h2>} />
          <Route path="about" element={<h2>J</h2>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
