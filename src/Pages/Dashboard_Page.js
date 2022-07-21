import React from "react";
import {useNavigate} from "react-router-dom";
import Sidebar from "../Components/Sidebar";
<<<<<<< HEAD
=======

>>>>>>> 1833bc6fdee6e1af0d02559eae0e611d6aa15431



function Dashboard_Page(){
    const nav = useNavigate();
    return(
<<<<<<< HEAD
        <>
        <div class="flex flex-row">
           
            <div>
                <Sidebar/>
            </div>
             <div class="w-2 h-screen bg-slate-400">a</div>
        
            <div class="flex-auto">
                <label>1</label>
                <button class=" border-green-500 border-2" onClick={() => {nav("/Login")}}>Logout</button>
            </div>
        </div>
        </>
=======
    <div class="flex bg-slate-200 h-screen">
        {/* Navbar */}
       <div class="w-60 rounded-xl"><Sidebar/></div>
       {/* Main container */}
        <div class="h-screen bg-gray-200 flex-auto">
            <button class=" border-green-500 border-2 h-7" onClick={() => {nav("/Login")}}>Logout</button>
        </div>
    </div>
>>>>>>> 1833bc6fdee6e1af0d02559eae0e611d6aa15431
    );
};

 export default Dashboard_Page;