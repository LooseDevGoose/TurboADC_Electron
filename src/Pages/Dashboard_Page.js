import React from "react";
import {useNavigate} from "react-router-dom";
import Sidebar from "../Components/Sidebar";




function Dashboard_Page(){
    const nav = useNavigate();
    return(
    <div class="flex bg-slate-200 h-screen">
        {/* Navbar */}
       <div class="w-60 rounded-xl"><Sidebar/></div>
       {/* Main container */}
        <div class="h-screen bg-gray-200 flex-auto">
            <button class=" border-green-500 border-2 h-7" onClick={() => {nav("/Login")}}>Logout</button>
        </div>
    </div>
    );
};

 export default Dashboard_Page;