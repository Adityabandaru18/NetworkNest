import Home from "./Home/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/Login.jsx";
import Profile from "./userprofile/Profile.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Profile />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
