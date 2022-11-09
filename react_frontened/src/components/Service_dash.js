import React, { useEffect } from "react";
import {useState} from "react";
import centre from "./Centre";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { Button } from "reactstrap";
import Footerr from "./Footer";
import Navbarrr from "./Afterloginnavbar";
import {toast,ToastContainer} from "react-toastify";

export default function Service_dash(){

    const data = useParams();
    console.log(data); 
    const [Ser , Addser] = useState("");
    const navigatetomaincustdash = useNavigate();
    const NavigateToMainCustDash=()=>
    {
      //console.log(`/api/customer/${data}`);
      console.log(Ser);
      if(Ser.length===0)
      {
        toast.error("please enter something ");
      }
      else
        navigatetomaincustdash(`/api/customer/dash/${data.email}/${Ser}`);
    }
   
 
    return (

        <>
        <Navbarrr />
        <ToastContainer />
        <br/>
        <center><a  href={`/api/orders/${data.email}`} className="btn btn-success">My orders</a></center>
            <div className="conta">
                <div className="row" >
                    <div className="col-5">
                        <img style={{width:680,padding:60}} src={process.env.PUBLIC_URL + "/1123.png"} / >
                    </div>
                    <div className="col-7">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <div className="shadow p-3 mb-2 bg-white rounded" style={{width:'30rem'}}>
                            <label htmlFor="exampleDataList" className="form-label" ><h5>Search services in your City</h5></label>
                            <input className="form-control"   list="datalistOptions" id="exampleDataList" placeholder="Type to search..." onChange={(e)=>{
            Addser(e.target.value) }}/>
                            <datalist id="datalistOptions">
                                 <option  value="Electrician"/>
                                <option value="Plumber"/>
                                <option value="Salon for men"/>
                                <option value="Salon for women"/>
                                <option value="Home Painting"/>
                                <option value="Decorator"/>
                                <option value="AC/RO Appliance mechanic"/>
                                <option value="TV mechanic"/>
                                <option value="Carpenter"/>
                                <option value="CLeaning & pest control"/>
                                <option value="Massage & Spa"/>
                                <option value="Personal chef"/>
                                <option value="Housemaid"/>
                                <option value="Baby sitter"/>
                                <option value="Laundry Services"/>
                                <option value="Driver"/>
                               </datalist>
                               <br />
                               <Button color="info"  onClick={()=>{
                            NavigateToMainCustDash();
                        }}>enter</Button>
                            </div>
                        
                    </div>
                </div>
                <div >
                    {/* <div className="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div> */}
                </div>
                <div className="row" style={{textAlign:"center"}}><h3>Features</h3></div>
                <br/><br/><br/>
                <div className='container d-flex justify-content-center mx-auto' >
                    <div className="row" style={{alignContent:'centre',paddingLeft:100,paddingRight:100}}>
                        <div className="col">
                            <div className="shadow p-3 mb-5 bg-body rounded text-center bg-transparent" style={{width:'10rem',height:'10rem'}}>
                                <div>
                                    <img style={{width:50}} src={process.env.PUBLIC_URL + "/spalogo.png"} />
                                </div>
                                <div>
                                    Spa & Massage
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="shadow p-3 mb-5 bg-body rounded text-center bg-transparent" style={{width:'10rem',height:'10rem'}}>
                                <div>
                                    <img style={{width:40}} src={process.env.PUBLIC_URL +"/plumberlogo.png"}/>
                                </div>
                                <div>
                                    Plumber
                                </div>
                                
                            </div>
                        </div>
                        <div className="col">
                            <div className="shadow p-3 mb-5 bg-body rounded text-center bg-transparent" style={{width:'10rem',height:'10rem'}}>
                                <div>
                                    <img style={{width:50}} src={process.env.PUBLIC_URL +"/mensalon.png"}/>
                                </div>
                                <div>
                                    Salon for men
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="shadow p-3 mb-5 bg-body rounded text-center bg-transparent" style={{width:'10rem',height:'10rem'}}>
                                <div>
                                    <img style={{width:40}} src={process.env.PUBLIC_URL +"/womentherapy.png"}/>
                                </div>
                                <div>
                                    Salon for women
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container d-flex justify-content-center mx-auto'>
                    <div className="row" style={{alignContent:'centre',paddingLeft:100,paddingRight:100}}>
                        <div className="col">
                            <div className="shadow p-3 mb-5 bg-body rounded text-center bg-transparent" style={{width:'10rem',height:'10rem'}}>
                                <div>
                                    <img style={{width:50}} src={process.env.PUBLIC_URL +"/spalogo.png"}/>
                                </div>
                                <div>
                                    Spa & Massage for men 
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="shadow p-3 mb-5 bg-body rounded text-center bg-transparent" style={{width:'10rem',height:'10rem'}}>
                                <div>
                                    <img style={{width:40}} src={process.env.PUBLIC_URL +"/electricianlogo.jpeg"}/>
                                </div>
                                <div>
                                    Electrician
                                </div>
                                
                            </div>
                        </div>
                        <div className="col">
                            <div className="shadow p-3 mb-5 bg-body rounded text-center bg-transparent" style={{width:'10rem',height:'10rem'}}>
                                <div>
                                    <img style={{width:45}} src={process.env.PUBLIC_URL +"/AClogo.png"}/>
                                </div>
                                <div>
                                    AC/RO appliance repairing
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="shadow p-3 mb-5 bg-body rounded text-center bg-transparent" style={{width:'10rem',height:'10rem'}}>
                                <div>
                                    <img style={{width:45}} src={process.env.PUBLIC_URL + "/pestlogo.png"} />
                                </div>
                                <div>
                                    Pest Control
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footerr />
        </>
    );
}