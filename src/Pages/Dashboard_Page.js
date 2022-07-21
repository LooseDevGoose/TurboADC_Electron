import React from "react";
import {useNavigate} from "react-router-dom";
import Sidebar from "../Components/Sidebar";



function Dashboard_Page(){
    const nav = useNavigate();
    return(
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
    );
};

 export default Dashboard_Page;