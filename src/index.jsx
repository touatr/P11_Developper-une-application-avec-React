import React from 'react'
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Details from './pages/Details';
import reportWebVitals from './reportWebVitals'

function Router() {
  const [logements, setLogements] = useState([])
  useEffect(() => {
    fetch("/logements.json")
    .then(response => response.json())
    .then(data => {
      setLogements(data)
    })
  }, [])
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home logements={logements}/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Details/:logementId" element={<Details logements={logements}/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
