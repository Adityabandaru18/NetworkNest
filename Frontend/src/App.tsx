import Home from "./Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/Login.tsx";
import Profile from "./userprofile/Profile";
import { ChakraProvider } from '@chakra-ui/react'

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
  )
}

export default App
