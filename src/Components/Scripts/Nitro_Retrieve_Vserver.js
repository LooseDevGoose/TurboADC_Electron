

export async function Nitro_Retrieve_Vserver(netscalerIP, userName, password, httpsCheckbox) {
 
    try{

    const protocol = httpsCheckbox ? "https" : "http";
    const response = await fetch(`${protocol}://${netscalerIP}/nitro/v1/config/nsfeature?action=enable`, {
    method: 'POST',
    credentials: "include",
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
    "nsfeature":  
    { 
        "feature":  
        [ 
            "LB", 
            "CS" 
        ] 
    } 

    })     
        });
        //Check if the response succeeded (authenticated)
        if(response.ok){

        console.log(response.json().then((data => {
            "all went well :)";
            
            
            
      })));
        //if not authenticated succesfully:
        }else{
            console.log("issue occured");
            
        };
     
      

    }catch(error){
        console.error("Nitro_Retrieve_Vserver: " + error);
    };
   

    
}

