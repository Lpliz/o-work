import React from "react";
import Footerr from "./Footer";
import Navbarr from "./Navbarr";
 
function About()
{
  return(
    <>
    <Navbarr />
        
        {/* <div class="conta mx-auto " style={{width: '1000px',alignContent:'center'}}>
            <br/><br/><br/>
            <div class="row" >
                <div class="shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
                    <h1>About Us</h1>
                </div>
            </div>
            <br/><br/><br/>
            <div class="row">
                <div class="shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
                    <div class='conta '>
                        <div class='row'>   
                            <h3 style={{textAlign:'center'}}>Who we are</h3>
                            <p>
                                Urban Company is Asia's largest online home services platform.  Launched in 2014, Urban Company today operates in India, Australia, Singapore, the USA, the UAE and The Kingdom of Saudi Arabia. The platform helps customers book reliable & high quality services -  beauty treatments, massages, haircuts, home cleaning, handymen, appliance repair, painting, pest control and more – delivered by trained professionals conveniently at home.   Urban Company's vision is to empower millions of professionals worldwide to deliver services at home like never experienced before. The Company raised Series F funding of USD 255 million in April 2021. The Series F round was led by new investors - Prosus Ventures, Dragoneer and Wellington Management with participation from existing investors - Vy Capital, Tiger Global and Steadview. The latest round includes a primary capital infusion of USD 188 million and a secondary sale of approximately USD 67 million by select angels and early investors
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="row">
                <div class="shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
                    <div class='conta '>
                        <div class='row'>   
                            <h3 style={{textAlign:'center'}}>How we do it</h3>
                            <p>
                                Urban Company provides a platform that allows skilled and experienced professionals to connect with users looking for specific services. Once on the platform, our match-making algorithm identifies professionals who are closest to the users’ requirements and available at the requested time and date                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        
        <div class='container'> 
            <br/><br/><br/><br/>
            <div class="shadow p-3 mb-5 bg-body rounded mx-auto d-flex justify-content-center align-items-center" style={{width:'65rem',height:'40rem'}}>
                <div class="row">
                    <div class='col-5'>
                        
                        <b><h1 style={{fontFamily:'cursive'}}>About Us</h1></b>
                        <br/>
                        <p>
                            Urban Company is Asia's largest online home services platform.  Launched in 2014, Urban Company today operates in India, Australia, Singapore, the USA, the UAE and The Kingdom of Saudi Arabia. The platform helps customers book reliable & high quality services -  beauty treatments, massages, haircuts, home cleaning, handymen, appliance repair, painting, pest control and more – delivered by trained professionals conveniently at home.   
                        </p>
                        <a href='/read_more'><button type="button" class="btn btn-info">Read more</button></a>
                    </div>
                    <div class='col-7' >
                        
                        <img style={{width:700,alignContent:'center'}} src="4887675_52055.jpg"/>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    
            </div>
        </div>
        <Footerr />
        
    </>
);
}

export default About;