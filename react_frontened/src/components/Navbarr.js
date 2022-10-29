import React from "react";


function Navbarr(){
    return(
        <>
            <nav class="navbar bg-light" >
                <div class="container-fluid" style={{backgroundColor:'black'}}>
                    <a class="navbar-brand" href="/">
                        <img src="owork.jpg" alt="Logo" width="40" height="24" class="d-inline-block align-text-top" />
                        <b style={{color:'white',fontFamily:'cursive'}}>Owork</b>
                    </a>
                    <ul class="nav justify-content-end" >
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" style={{color:'white',fontFamily:'cursive'}} href="/"><b>Home</b></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <b style={{color:'white',fontFamily:'cursive'}}>Service</b>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="/">Electrician</a></li>
                                <li><a class="dropdown-item" href="/">Plumber</a></li>
                                <li><a class="dropdown-item" href="/">Salon for men</a></li>
                                <li><a class="dropdown-item" href="/">Salon for women</a></li>
                                <li><a class="dropdown-item" href="/">Home Painting</a></li>
                                <li><a class="dropdown-item" href="/">Decorator</a></li>
                                <li><a class="dropdown-item" href="/">AC/RO Appliance mechanic</a></li>
                                <li><a class="dropdown-item" href="/">TV mechanic</a></li>
                                <li><a class="dropdown-item" href="/">Carpenter</a></li>
                                <li><a class="dropdown-item" href="/">CLeaning & pest control</a></li>
                                <li><a class="dropdown-item" href="/">Massage & Spa</a></li>
                                <li><a class="dropdown-item" href="/">Personal chef</a></li>
                                <li><a class="dropdown-item" href="/">Housemaid</a></li>
                                <li><a class="dropdown-item" href="/">Baby sitter</a></li>
                                <li><a class="dropdown-item" href="/">Laundry Services</a></li>
                                <li><a class="dropdown-item" href="/">Driver</a></li>
              
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style={{color:'white',fontFamily:'cursive'}} href="/aboutus"><b>About</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style={{color:'white',fontFamily:'cursive'}}href="/"><b>Blog</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style={{color:'white',fontFamily:'cursive'}}href="/"><b>Contact Us</b></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" style={{color:'white',fontFamily:'cursive'}}href="/api/technician/signup" ><b>Register as a technician</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style={{color:'white',fontFamily:'cursive'}}href="/api/login" ><b>Login</b></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbarr;