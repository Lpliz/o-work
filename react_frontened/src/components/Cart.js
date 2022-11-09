import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbarrr from "./Afterloginnavbar";
import GiveratingApp from "./Ratinggiving";


export default function Cart({tchemail,status,desc,date,custemail}){

    const [Tech , settech] = useState ({});
     
     useEffect(() => {
        axios.get(`http://localhost:8080/api/technician/${tchemail}`).then((response) => {
          settech(response.data);
        //   console.log(response.data);
          console.log(Tech);
        });
      date.slice(1,10);
    },[]);
    

    return (
  
        <>
        
            <div class='conta '>
            <div class='row 'style={{paddingLeft:'15rem',paddingTop:'5rem',paddingRight:'15rem'}}>
                  <div class="card " style={{width:'30rem'}}>
                      <h5 class="card-header" style={{backgroundColor:'#5F9EA0'}}>{Tech.name}</h5>
                      <div class="card-body">
                          <div class='row'>
                              <div class='col-9'>
                                  <h6>Profession : {Tech.areaofexpertise}</h6>
                                  <h6>Order description : {desc}</h6>
                                  <h6>Date of Placing order : {date.slice(0,10)} </h6>
                                  <h6>Status:{ }  
                                    <button type="button" class="btn btn-info" disabled> {status}</button>
                                  </h6>

                                  <div style={{display:status==="confirmed"?"block":"none"}}>
                                 <h6> Technician  Phone number : {Tech.phone}</h6> (Revealed after confirming the order)
                                 <br/>
                                 <a href={`/api/addreview/${custemail}/${tchemail}`}>Please rate our technician</a>
                                    </div>
                                  
                                  
                                  
                              </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
  }

  
 