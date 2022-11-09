import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "reactstrap";
import Navbarrr from "./Afterloginnavbar";
import Footerr from "./Footer";
import Adtable from "./TechTableRow";
import Addtable from "./WorktypeRow";

export default function AdminDash()
{
  const data=useParams();
  console.log(data);
  const[work,setwork]=useState({adminemail:data.email});
  const [Tech,settech]=useState([]);
  const [i,seti] = useState(1);
  const [Allwork,setW] = useState([]);
  const Getalltech = () => {

    axios.get(`http://localhost:8080/api/technician/getall`).then(
        (response) => {
            
            console.log(response.data);
           
            settech(response.data);
        } 
    );
    axios.get(`http://localhost:8080/api/worktype/getall`).then(
        (response) => {
            
            console.log(response.data);
           
            setW(response.data);
        } 
    );

};
useEffect ( () => {
    
    Getalltech();

} , []
);
  return(
    <div>
      <Navbarrr />
      <br>
      
      </br>
      <ToastContainer />
      <div className="shadow  mb-5  rounded  my -5">
                <div className="text-center">
                  <br />
                <h3>Admin Dashboard  </h3>
                <br />
                </div>
            
            </div>
            <div className="conta">
                <div className="row"  style={{paddingLeft:'20rem'}}>
                <div class="shadow  mb-5 bg-white rounded" style={{width:'30rem'}}>
                        <h2 >Add the work type : </h2>
                    </div>
                    </div>
                    <div>
                <div class="d-flex justify-content-left" style={{paddingLeft:"10rem"}}>
                    <div class="shadow p-3 mb-5 bg-white rounded" style={{width:'50rem'}}>
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Work Name</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Enter Work name" onChange={(e)=>{
                        setwork({...work,workname:e.target.value}) }}  style={{width:"30rem"}}></textarea>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea2">Work decsription</label>
                                <textarea class="form-control" id="exampleFormControlTextarea2" rows="3" placeholder="Enter work description" onChange={(e)=>{
                        setwork({...work,description:e.target.value}) }}></textarea>
                            </div>
                            <br/>
                            
                            <Button  className='' color="success" onClick={()=>{
          axios.post(`http://localhost:8080/api/admin/addworktype`,work).then(
            (res)=>{
              console.log("success");
              toast.success("worktype added successfully");
              window.location.reload(false);
            }
          );
        }} >Submit</Button> { }
        <Button color="warning" type="clear">Clear</Button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="conta">
                <div className="row">
                <div class="d-flex justify-content-center">
                    <div class="shadow  mb-5 bg-white rounded" sty>
                        <h2 >Technician Details  </h2>
                    </div>
                </div>
                </div>
            </div>
            <div class='conta '>
                <div class='row 'style={{paddingLeft:'10rem',paddingTop:'3rem',width:"80rem"}}>
                    <table class="table table-bordered table-hover table-dark">
                        <thead >
                            <tr className="table-light">
                                <th scope="col">#</th>
                                <th scope="col">Techncian Name</th>
                                <th scope="col">Job Type</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Remove Technician</th>
                            </tr>
                        </thead>
                        {
                          
                          Tech.length>0 ? Tech.map((item)=>(
                            <Adtable 
                            email={item.email}
                            n={item.name}
                            w={item.areaofexpertise}
                            c={item.phone}
                            e={item.email}
                            r={item.rating} />
                        ))  : "No Technician registered"
                    
                        }
                        
                    </table>
                </div>
            </div>
            <br /><br/>
            <div className="conta">
                <div className="row">
                <div class="d-flex justify-content-center">
                    <div class="shadow  mb-5 bg-white rounded" sty>
                        <h2 >Available Job types   </h2>
                    </div>
                </div>
                </div>
            </div>
            <div class='conta '>
                <div class='row 'style={{paddingLeft:'10rem',paddingTop:'3rem',width:"80rem"}}>
                    <table class="table table-bordered table-hover table-dark">
                        <thead >
                            <tr className="table-light">
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Admin email</th>
                                <th scope="col">Remove this Job</th>
                            </tr>
                        </thead>
                        {
                          
                          Allwork.length>0 ? Allwork.map((item)=>(
                            <Addtable
                            name={item.workname}
                            d={item.description}
                            a={item.adminemail} />
                        ))  : "No Work type  registered"
                    
                        }
                        
                    </table>
                </div>
            </div>
      <Footerr/>
    </div>

  );
}