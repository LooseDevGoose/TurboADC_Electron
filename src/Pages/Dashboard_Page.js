import React from "react";
import {useNavigate} from "react-router-dom";
import Sidebar from "../Components/Sidebar";




function Dashboard_Page(){
    const nav = useNavigate();
    return(
       
        <button class=" border-green-500 border-2" onClick={() => {nav("/Login")}}>Logout</button>
    
    );
};

 export default Dashboard_Page;