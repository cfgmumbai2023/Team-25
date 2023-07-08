import './App.js'
import React from 'react'
import Home from "./Home/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return <Router>
    <div>
      <Routes>
      <Route exact path="/" element={<Home/>}/>

      </Routes>
    </div>
  </Router>
}

export default App
