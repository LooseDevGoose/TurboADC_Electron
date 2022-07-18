import React from "react";
import {useNavigate} from "react-router-dom";




function Dashboard_Page(){
    const nav = useNavigate();
    return(
        <>
        <label>1</label>
        <button class=" border-green-500 border-2" onClick={() => {nav("/Login")}}>Logout</button>
        </>
    );
};

 export default Dashboard_Page;