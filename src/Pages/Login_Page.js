import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";


function Login_Page(){

    const [netscalerIP, setNetscalerIP] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [httpsCheckbox, setHttpscheckbox] = useState(true);

    const nav = useNavigate();

    //Change HttpsCheckbox Variable onclick
    const handleChange = () => {

        setHttpscheckbox(!httpsCheckbox);
    };

    //Pass variables from form and attempt login to Netscaler API
    async function login(){

        nav("/Dashboard")

    }

    return(
        <div class="grid grid-cols-1 h-screen">
        <div class="bg-gradient-to-br from-blue-400 to-slate-800">
          <div class="grid h-screen place-items-center">
            <div class="w-full max-w-md">
              <form class="bg-white shadow-2xl px-8 pt-6 pb-8 mb-4 rounded">
                <div class="flex justify-center">
                  <img
                    class="rounded-full block"
                    src="C:\Coding\Personal\Turbo_ADC_Electron\TurboADC_Electron\src\Components\images\Logo.png"
                  ></img>
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Netscaler IP:
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nsip"
                    type="text"
                    placeholder="Netscaler IP"
                    onChange={(event) => {setNetscalerIP(event.target.value)}}
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Username:
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={(event) => {setUserName(event.target.value)}}
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Password:
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="**********"
                    onChange={(event) => {setLoginPassword(event.target.value)}}
                  />
                </div>
                <div class="flex items-center justify-center mb-3">
                <input type="checkbox" id="httpscheckbox" checked={httpsCheckbox} onChange={handleChange}></input>
                    <label class="text-gray-700 text-sm font-bold ml-1">Connect over HTTPS</label>
                    
                </div>
                <div class="flex items-center justify-center mb-12">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={login}
                  >
                    Sign In
                  </button>

                </div>
             
              </form>
              <p class="text-center text-gray-500 text-xs">
                &copy;2022 Mick Hilhorst All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Login_Page;