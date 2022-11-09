import React, { useEffect, useState } from "react";
import { useParams ,useNavigate } from "react-router-dom";
import axios from "axios";
import Navbarrr from "./Afterloginnavbar";
import Footerr from "./Footer";


function CustDash() {
    const data = useParams();
    console.log(data); 
    console.log("yes");
    // const { Data } = axios.get(`http://localhost:8080/api/customer/${data}`);
     const [Data, setData] = useState([]); 
    
    useEffect(() => {
        axios.get(`http://localhost:8080/api/customer/${data.email}`).then(res=>{
            setData(res.data);
            console.log(res.data); 
            console.log("ohk");
        }).catch(err => {
            console.error(err); 
        }) ; 

    }, []);
let url='/api/customer/ser/${data.email}';
function formhandler()
{
    NavigateToSerCustDash();

}
const navigatetosercustdash = useNavigate();
    const NavigateToSerCustDash=()=>{
      //console.log(`/api/customer/${data}`);
      navigatetosercustdash(`/api/customer/ser/${data.email}`);
    }
    return(

        <>
        <Navbarrr />
        <br/>
        <center><a  href={`/api/orders/${data.email}`} className="btn btn-success">My orders</a></center>
        <br></br><br></br><br></br><br></br>
        <div className="conta">
            <div className="row" >
                <div className="col-5">
                    <img style={{width:'50rem'}} src={process.env.PUBLIC_URL + "/541.png"} />
                </div>
                <div className="col-7">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <div className="shadow p-3 mb-5 bg-white rounded" style={{width:'50rem'}}>
                        <h5>Where do you need service</h5>
                        <div className="btn-group">
                            <button type="button" color="info" outline className="btn btn- dropdown-toggle " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                Select Your City
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"  >
                                <li><a className="dropdown-item" href={`/api/customer/ser/${data.email}`}  >Varanasi</a></li>
                                <li><a className="dropdown-item" href={`/api/customer/ser/${data.email}`}>Lucknow</a></li>
                                <li><a className="dropdown-item" href={`/api/customer/ser/${data.email}`}>Prayagraj</a></li>
                                <li><a className="dropdown-item" href={`/api/customer/ser/${data.email}`}>Ranchi</a></li>
                                <li><a className="dropdown-item" href={`/api/customer/ser/${data.email}`}>Bangalore</a></li>
                                <li><a className="dropdown-item" href={`/api/customer/ser/${data.email}`}>Faizabad</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="card" style={{width:'60rem'}}>
                        <div className="card-body" >
                            <h5 className="card-title">Where do you need service</h5>
                            <div className="btn-group">
                                <button type="button" color="info" outline className="btn btn- dropdown-toggle " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                    Select Your City
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                    <li><button className="dropdown-item" type="button">Varanasi</button></li>
                                    <li><button className="dropdown-item" type="button">Lucknow</button></li>
                                    <li><button className="dropdown-item" type="button">Prayagraj</button></li>
                                    <li><button className="dropdown-item" type="button">Ranchi</button></li>
                                    <li><button className="dropdown-item" type="button">Bangalore</button></li>
                                    <li><button className="dropdown-item" type="button">Faizabad</button></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <Footerr />
    </>
);
}

export default CustDash;