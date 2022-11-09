import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function TechCart({custemail,status,desc,date,orderidd}){
    
const [currstatuss,setstatus] = useState("confirmed");
console.log(orderidd);
console.log(currstatuss);
    return (
  
        <>
        <ToastContainer />
            <div class='conta '>
            <div class='row 'style={{paddingLeft:'15rem',paddingTop:'5rem',paddingRight:'15rem'}}>
                  <div class="card " style={{width:'30rem'}}>
                      <h5 class="card-header" style={{backgroundColor:'#5F9EA0'}}>Customer Email : {custemail}</h5>
                      <div class="card-body">
                          <div class='row'>
                              <div class='col-9'> 
                                  <h6>Description: {desc}</h6>
                                  <h6>Status:{status}</h6>
                                  <h6>Ordered Date : {date.slice(0,10)}</h6>
                                  <button  onClick={()=>{
                                    axios.put(`http://localhost:8080/api/updateorderstatus`, null, { params: { orderid : orderidd , currstatus : "confirmed" }  }).then((res)=>{
                                        console.log(res.data);
                                        toast.success("ordered confirmed successfully");
                                    });

                                    
                                    
                                  }} class="btn btn-success">
                                     <div style={{display:status==="confirmed"?"block":"none"}}>
                                        Order Already Confirmed <br/>
                                        (Customer will contact you via phone )

                                        
                                    </div>
                                    <div style={{display:status!=="confirmed"?"block":"none"}}>
                                        Click to confirm order
                                    </div>
                                    </button>




                                  
                              </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default TechCart;