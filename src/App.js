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

    <Route path="/Dashboard" element={
    <>
     <Sidebar/>
     <Dashboard_Page/>
    </>
  } />

  </Routes>
</HashRouter>
  );
}



export default App;