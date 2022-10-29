import React from "react";
import {Button,container} from "reactstrap";
import {toast,ToastContainer} from "react-toastify";
const Home=()=>{
   const toastmessege=()=>{
        toast("Cool")
    };

    
    return(

        <div className="text-center">
        <div class="container-fluid text-sm-center p-3 bg-light">
  <h1 class="display-4"> Owork </h1>
  <p class="display-6">One stop solution for all your work  </p>
 <ToastContainer / >
    <Button outline color="info"  onClick={toastmessege}>Lets proceed</Button>
 
          
      
  </div>  
  </div>
    );

}

export default Home;