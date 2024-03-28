import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/Login.jsx";
import App from "./App.tsx";
const Redirect: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Redirect;
