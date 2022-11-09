import { Rating, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "reactstrap";

function Techcard({Emp,Cust}){
    console.log(Emp);
    console.log(Cust);
    const [age,setage]=useState(0);
    // const navigate = useNavigate();
    // const Navigatehome=()=>{
    //     navigate("/api/orders/${Emp.email}/");
    // }
    const [order,setorder] = useState({technicianemail:Emp.email});
    useEffect(()=>{
         //setorder({...order,technicianemail:Emp.email});
         setorder({...order,customeremail:Cust});
        // console.log(order);

    }
    , []);
     

    return (

        <>
        <ToastContainer />
            <div className='conta '>
                <div className='row 'style={{paddingLeft:'15rem',paddingTop:'7rem'}}>
                    <div className="card " style={{width:'60rem'}}>
                        <h5 className="card-header" style={{backgroundColor:'#FF99AA'}}>{Emp.name}</h5>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-9'>
                                    <h5 className="card-title"></h5>
                                    <h6>Area of expertise : {Emp.areaofexpertise}</h6>
                                   
                            
                                    <h6>City : {Emp.city}</h6>
                                    <h6>Date of Birth :{Emp.dob}</h6>
                                    <p className="card-text">{}</p>
                                    <Button  color="success" onClick={()=>{
                                        console.log(order);
                                            axios.post(`http://localhost:8080/api/addorder`,order).then(
                                                (response)=>{
                                                    
                                                    console.log(response.data);
                                                    console.log("success");
                                                    toast.success("Order added successfully");
                                                    
                                        
                                                } , 
                                                (error) => {
                                                    console.log(error);
                                        
                                                }
                                                )
                                        

                                    }}>Add</Button>
                                 {    }   <TextField
                                            id="outlined-multiline-flexible"
                                            label="Describe your order"
                                            multiline
                                            maxRows={4}
                                            // value={value}
                                            onChange={(e)=>{
                                                setorder({...order,description:e.target.value});
                                                // console.log(order);
                                            }}
                                            />
                                </div>
                                
                                <div className='col-3'>
                                    <h5>Rating : <Rating name="read-only" value={Emp.rating} readOnly /> </h5>
                                    
                                    <h6>Experience : </h6>
                                    <h6><a href={`/api/reviews/${Emp.email}`}>Show all reviews </a></h6> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Techcard;