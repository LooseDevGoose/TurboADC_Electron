//Default Components
import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";

//Routing Pages
import Login_Page from "./Pages/Login_Page";
import Dashboard_Page from "./Pages/Dashboard_Page"
import Sidebar from "./Components/Sidebar";

function App() {
  return(
<HashRouter>
  <Routes>
    <Route exact path="/" element={<Login_Page/>} />

    <Route path="/Login" element={<Login_Page/>} />

<<<<<<< HEAD
    <Route path="/Dashboard" element={
    <>
     <Sidebar/>
     <Dashboard_Page/>
    </>
  } />

  <Route path="/" element={<Login_Page/>} />
  
=======
    <Route path="/Dashboard" element={<Dashboard_Page/>} />

>>>>>>> 1833bc6fdee6e1af0d02559eae0e611d6aa15431
  </Routes>
</HashRouter>
  );
}




export default App;