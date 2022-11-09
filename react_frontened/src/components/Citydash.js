import React from "react";
import { Card,CardTitle,Button,CardText,Row,Col } from "reactstrap";

function Citydash(){

    return (

        <>
            <br></br><br></br><br></br><br></br>
            <div class="conta">
                <div class="row" >
                    <div class="col-5">
                        <img style={{width:'50rem'}} src='541.png'/>
                    </div>
                    <div class="col-7">
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <div class="shadow p-3 mb-5 bg-white rounded" style={{width:'50rem'}}>
                            <h5>Where do you need service</h5>
                            <div class="btn-group">
                                <button type="button" color="info" outline class="btn btn- dropdown-toggle " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                    Select Your City
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                    <li><a class="dropdown-item" href='/varanasi'>Varanasi</a></li>
                                    <li><a class="dropdown-item" href='/lucknow'>Lucknow</a></li>
                                    <li><a class="dropdown-item" href='/prayagraj'>Prayagraj</a></li>
                                    <li><a class="dropdown-item" href='/ranchi'>Ranchi</a></li>
                                    <li><a class="dropdown-item" href='/bangalore'>Bangalore</a></li>
                                    <li><a class="dropdown-item" href='/faizabad'>Faizabad</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div class="card" style={{width:'60rem'}}>
                            <div class="card-body" >
                                <h5 class="card-title">Where do you need service</h5>
                                <div class="btn-group">
                                    <button type="button" color="info" outline class="btn btn- dropdown-toggle " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                        Select Your City
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                        <li><button class="dropdown-item" type="button">Varanasi</button></li>
                                        <li><button class="dropdown-item" type="button">Lucknow</button></li>
                                        <li><button class="dropdown-item" type="button">Prayagraj</button></li>
                                        <li><button class="dropdown-item" type="button">Ranchi</button></li>
                                        <li><button class="dropdown-item" type="button">Bangalore</button></li>
                                        <li><button class="dropdown-item" type="button">Faizabad</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Citydash;