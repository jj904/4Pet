import "./App.css";
import LoginPage from "./views/account/LoginPage";
import RegisterPage from "./views/account/RegisterPage";
import ForgetPassword from "./views/account/ForgetPassword";
import HomePage from "./views/user/HomePage";
import Chat from "./views/user/Chat";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext";
import Landing from "./views/info/Landing";
import About from "./views/info/About";
import Contact from "./views/info/Contact";
import ProfilePage from "./views/user/ProfilePage";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
