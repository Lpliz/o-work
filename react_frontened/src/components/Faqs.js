import React from "react";
import Footerr from "./Footer";
import Navbarr from "./Navbarr";

function Query(){

    return (

        <>
        <Navbarr />
            <div class='container'> 
                <br/><br/><br/><br/>
                <div class="shadow p-3 mb-5 bg-body rounded  " style={{width:'80rem',height:'40rem'}}>
                    <div class="row">
                        <div class='col-7'>
                            <h1 ><strong>FAQ</strong></h1>
                            <br/>
                            <p>
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                Does customer need to provide any tools/spare parts/.. to service professionals?
                                </button>
                            </p>
                            <div class="collapse" id="collapseExample1">
                                <div class="card card-body">
                                No, you don't need to provide anything from your side. Service professionals will take care of the things they need.                                </div>
                            </div>
                            <p>
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                Is anything expected from customers?
                                </button>
                            </p>
                            <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                Nothing is expected from our customers except that they treat service professionals with courtesy and respect and that they provide them a safe and clean environment at a safe location to perform the services                                </div>
                            </div>
                            <p>
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                Payment policy?
                                </button>
                            </p>
                            <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                We accept various modes of payments as displayed on payment gateway, through our third party payment processor.                                </div>
                            </div>
                            <p>
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                                Is there EMI available?
                                </button>
                            </p>
                            <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                No currently we are not accepting EMI. If it's available in future, it will be updated in payment policy.                                </div>
                            </div>
                            <p>
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
                                How to reach to owork in case of any help?
                                </button>
                            </p>
                            <div class="collapse" id="collapseExample5">
                                <div class="card card-body">
                                You can write a mail to us at support@owork@gmail.com , or can call to our toll-free number 1800 0000 0000.                                </div>
                            </div>
                            <p>
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
                                Refund and Cancellation policy?
                                </button>
                            </p>
                            <div class="collapse" id="collapseExample6">
                                <div class="card card-body">
                                If due to any reason you wish to cancel your order, you can do it through our website in simple steps. Go to "my orders" and then scroll down to the order u want to cancel. Refund will be initiated according to our refund policy.                                </div>
                            </div>
                            <p>
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample">
                                    query_add
                                </button>
                            </p>
                            <div class="collapse" id="collapseExample7">
                                <div class="card card-body">
                                    answer
                                </div>
                            </div>
                            <p>
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample">
                                    query_add
                                </button>
                            </p>
                            <div class="collapse" id="collapseExample8">
                                <div class="card card-body">
                                    answer
                                </div>
                            </div>
                            
                        </div>
                        <div class='col-5' >
                            <br/><br/><br/><br/>
                            <img style={{width:600,alignContent:'center'}} src={process.env.PUBLIC_URL+"/query.jpg"}/>
                        </div>
                    </div>
                    {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
                        
                </div>
            </div>
            <Footerr />
        </>
    );
}

export default Query;