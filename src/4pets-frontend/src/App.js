import './App.css';
import LoginPage from './views/account/LoginPage';
import RegisterPage from './views/account/RegisterPage';
import HomePage from './views/user/HomePage';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'




function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route  exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
    </div>

  )
}

export default App
 












