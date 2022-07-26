import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {

   //Declare navigation function for buttons
  const nav = useNavigate();

  return (
<div class="w-60 h-full shadow-md bg-slate-600 87 px-1 rounded-r-2xl overflow-hidden">
  <ul class="relative h-full">
    <li class="relative">
      <a class="flex items-center text-gray-100 justify-center font-extrabold text-2xl m-6">
        <img src="#TempURL"></img>
        <label>Turbo ADC</label>
      </a>
      <div class="w-full border-t border-gray-300 pt-5"></div>
      <NavLink to="/Dashboard" activeStyle={{fontWeight: "bold", color: "red"}}>
        
      <a class="flex items-center text-md font-semibold py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"  data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <svg class="mx-3" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="23" height="23"><path fill="#e5e7eb" d="M23.9,11.437A12,12,0,0,0,0,13a11.878,11.878,0,0,0,3.759,8.712A4.84,4.84,0,0,0,7.113,23H16.88a4.994,4.994,0,0,0,3.509-1.429A11.944,11.944,0,0,0,23.9,11.437Zm-4.909,8.7A3,3,0,0,1,16.88,21H7.113a2.862,2.862,0,0,1-1.981-.741A9.9,9.9,0,0,1,2,13,10.014,10.014,0,0,1,5.338,5.543,9.881,9.881,0,0,1,11.986,3a10.553,10.553,0,0,1,1.174.066,9.994,9.994,0,0,1,5.831,17.076ZM7.807,17.285a1,1,0,0,1-1.4,1.43A8,8,0,0,1,12,5a8.072,8.072,0,0,1,1.143.081,1,1,0,0,1,.847,1.133.989.989,0,0,1-1.133.848,6,6,0,0,0-5.05,10.223Zm12.112-5.428A8.072,8.072,0,0,1,20,13a7.931,7.931,0,0,1-2.408,5.716,1,1,0,0,1-1.4-1.432,5.98,5.98,0,0,0,1.744-5.141,1,1,0,0,1,1.981-.286Zm-5.993.631a2.033,2.033,0,1,1-1.414-1.414l3.781-3.781a1,1,0,1,1,1.414,1.414Z"/></svg>

        <span>Dashboard</span>
      </a>
      </NavLink>
      
    </li>
    <li class="relative">
      <a class="flex items-center text-md font-semibold py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <svg class="mx-3" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="23" height="23">
        <path fill="#e5e7eb" d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.419,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM20,12c0,5.455-6.319,9.033-8,9.889-1.683-.853-8-4.42-8-9.889V6.883A3,3,0,0,1,6.052,4.037L12,2.054l5.948,1.983A3,3,0,0,1,20,6.883Z"/>
        <path fill="#e5e7eb" d="M15.3,8.3,11.112,12.5,8.868,10.16a1,1,0,1,0-1.441,1.386l2.306,2.4a1.872,1.872,0,0,0,1.345.6h.033a1.873,1.873,0,0,0,1.335-.553l4.272-4.272A1,1,0,0,0,15.3,8.3Z"/></svg>

        <span>SSL Profiles</span>
      </a>

    </li>
    <li class="relative">
      <a class="flex items-center text-md font-semibold py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <svg class="mx-3" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="23" height="23"><path fill="#e5e7eb" d="M19,22H5c-2.757,0-5-2.243-5-5V7C0,4.243,2.243,2,5,2h14c2.757,0,5,2.243,5,5v10c0,2.757-2.243,5-5,5ZM5,4c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V7c0-1.654-1.346-3-3-3H5Zm13,9h-4c-1.103,0-2-.897-2-2v-2c0-1.103,.897-2,2-2h4c1.103,0,2,.897,2,2v2c0,1.103-.897,2-2,2Zm-4-4v2h4.001v-2h-4.001Zm-4,3c0-.552-.448-1-1-1H5c-.552,0-1,.448-1,1s.448,1,1,1h4c.552,0,1-.448,1-1Zm10,4c0-.552-.448-1-1-1H5c-.552,0-1,.448-1,1s.448,1,1,1h14c.552,0,1-.448,1-1Z"/></svg>

        <span>QR Code</span>
      </a>
     
    </li>
    
    <li class="absolute bottom-7 left-0 w-full">
      <div class="w-full border-t border-gray-300 pt-5"></div>
      <a href="" onClick={() => {nav("/Login")}} class="flex items-center text-md font-semibold py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <svg class="mx-3" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="23" height="23"><path fill="#e5e7eb" d="M19,22H5c-2.757,0-5-2.243-5-5V7C0,4.243,2.243,2,5,2h14c2.757,0,5,2.243,5,5v10c0,2.757-2.243,5-5,5ZM5,4c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V7c0-1.654-1.346-3-3-3H5Zm13,9h-4c-1.103,0-2-.897-2-2v-2c0-1.103,.897-2,2-2h4c1.103,0,2,.897,2,2v2c0,1.103-.897,2-2,2Zm-4-4v2h4.001v-2h-4.001Zm-4,3c0-.552-.448-1-1-1H5c-.552,0-1,.448-1,1s.448,1,1,1h4c.552,0,1-.448,1-1Zm10,4c0-.552-.448-1-1-1H5c-.552,0-1,.448-1,1s.448,1,1,1h14c.552,0,1-.448,1-1Z"/></svg>

        <span>Logout</span>
      </a>
     
    </li>
  </ul>
</div>
  
  );
}
export default Sidebar;


