

export async function Login_To_ADC(netscalerIP, userName, password, httpsCheckbox) {
 
    try{

    const protocol = httpsCheckbox ? "https" : "http";
    
    //currently the cookies are not working thus authentication does not work on subsequent requests
    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/login`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
    'login': 
        { 
        'username': userName, 
        'password': password
        } 
    })     
        });
        //Check if the response succeeded (authenticated)
        if(response.ok){

        console.log(response.json().then((data => {

            //Experimentation with setting a cookie manually
            document.cookie = `NITRO\_AUTH\_TOKEN=${data.sessionid}; expires=session; domain=.example.com; path=/`;      
            
      })));
        //if not authenticated succesfully:
        }else{
            console.log("Something went wrong with the authentication procedure.");
            
        };
     
      

    }catch(error){
        console.error("Login_To_ADC: " + error);
    };
    
    
  

    // return fetch(`${protocol}://${nsip}:/list`)
    // .then(data => data.json()
   

    
}

