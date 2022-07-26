import React from "react";
import {useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { Login_To_ADC } from "../Components/Scripts/Login_To_ADC";
import { Nitro_Retrieve_Vserver } from "../Components/Scripts/Nitro_Retrieve_Vserver";


function Login_Page(){

    const [netscalerIP, setNetscalerIP] = useState("192.168.176.106");
    const [userName, setUserName] = useState("nsroot");
    const [password, setPassword] = useState("nsroot1");
    const [httpsCheckbox, setHttpscheckbox] = useState(true);

    //Define navigation function for page switching
    const nav = useNavigate();

    //Change HttpsCheckbox Variable onclick
    const handleChange = () => {

        setHttpscheckbox(!httpsCheckbox);
    };

    //Pass variables from form and attempt login to Netscaler API
    async function login(){

      
     
       const session_token = Login_To_ADC(netscalerIP, userName, password, httpsCheckbox)

   
        //nav("/Dashboard")

    }

       async function vserver(){

      
     
       Nitro_Retrieve_Vserver(netscalerIP, userName, password, httpsCheckbox);

   
        //nav("/Dashboard")

    }

    return(
        <div className="grid grid-cols-1 h-screen">
        <div className="bg-gradient-to-br from-blue-400 to-slate-800">
          <div className="grid h-screen place-items-center">
            <div className="w-full max-w-md">
              <form className="bg-white shadow-2xl px-8 pt-6 pb-8 mb-4 rounded">
                <div className="flex justify-center">
                  <img
                    className="rounded-full block"
                    src="X:\Python Projects\Personal Projects\TurboADC_Electron\TurboADC_Electron\src\Components\images\Logo.png"
                    width="150"
                    height="150"
                    
                  ></img>
                </div>
                <div className="flex justify-center">
                  <label className="font-semibold text-xl">Turbo ADC v1.0.2</label>
                </div>
                <div className="flex justify-center">
                    <div class="w-full border-t border-black-300 pb-5"></div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"            
                  >
                    Netscaler IP:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nsip"
                    type="text"
                    placeholder="Netscaler IP"
                    onChange={(event) => {setNetscalerIP(event.target.value)}}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                   
                  >
                    Username:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={(event) => {setUserName(event.target.value)}}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                   
                  >
                    Password:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="**********"
                    onChange={(event) => {setPassword(event.target.value)}}
                  />
                </div>
                <div className="flex items-center justify-center mb-3">
                <input type="checkbox" id="httpscheckbox" checked={httpsCheckbox} onChange={handleChange}></input>
                    <label className="text-gray-700 text-sm font-bold ml-1">Connect over HTTPS</label>
                    
                </div>
                <div className="flex items-center justify-center mb-12">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={login}
                  >
                    Sign In
                  </button>

                </div>

                   
                <div className="flex items-center justify-center mb-12">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={vserver}
                  >
                    Test Button
                  </button>

                </div>
             
             
             
              </form>
              <p className="text-center text-gray-500 text-xs">
                &copy;2022 Mick Hilhorst All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Login_Page;