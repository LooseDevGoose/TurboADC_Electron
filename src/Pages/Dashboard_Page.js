import React from "react";
import {useNavigate} from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";



function Dashboard_Page(){
    const nav = useNavigate();
    return(
    <div class="flex bg-slate-200 h-screen">
        {/* Navbar */}
       <div class="min-w-60 rounded-xl"><Sidebar/></div>
       {/* Main container */}
        <div class="h-screen m-8 bg-gray-200 flex-auto flex-nowrap">
            <div class=" bg-white mb-5 p-3 rounded-md text-gray-700 font-bold text-4xl drop-shadow-lg">Dashboard</div>
            <div class="flex   justify-between">
                {/* First row of Cards */}
                <div><Card Title="test"/></div>
                <div><Card/></div>
                <div><Card/></div>
                <div><Card/></div>
            

            </div>
        </div>
    </div>
    );
};

 export default Dashboard_Page;