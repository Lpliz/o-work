import React from "react";
import * as emailjs from 'emailjs-com';
import Footerr from "./Footer";
import Navbarr from "./Navbarr";
import image from "./Forest.jpg"; 
// import emailjs from 'emailjs-com';
const SERVICE_ID = "service_2kpgmui";
const TEMPLATE_ID = "template_pr1hgal";
const USER_ID = "ZS4xW1TheJrKJtumu";


function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID,   
        e.target, USER_ID)
            .then((result) => {
                alert('email sent successfully');
            }, (error) => {
                alert('error sending email');
            });
            //clears the form after sending the email
            e.target.reset();
        };
    return(

        <>
        <Navbarr />
            <div class="conta" style={{paddingLeft:"15rem",paddingTop:"5rem"}}>
                <div className="row">
                    <div className="col-8">
                        <form  class="text-center border border-dark p-5 rounded" onSubmit={sendEmail} style={{width:"25rem" , backgroundImage:`url(${image})` , backgroundRepeat: 'no-repeat' , backgroundSize: 'cover'}}>
                            <p class="h4 mb-4">Contact us</p>
                            <input type="text standard-basic border-dark" id="from_name" name="from_name" class="form-control mb-4 bg-transparent" placeholder="Name" />
                            <input type="email" id="reply_to" name="reply_to" class="form-control mb-4 bg-transparent" placeholder="E-mail"/>
                             
                           
                            <div class="form-group">
                                <textarea class="form-control rounded-0 bg-transparent"  name="message" id="message" rows="3" placeholder="Message"></textarea>
                            </div>
                            <br />
                            <button class="btn btn-success btn-block" type="submit">Send</button>
                        </form>



{/* <form onSubmit={sendEmail}>
            <input type='hidden' name='contact_number' /> 
            <label for='name'>Name</label>
            <input id='name' type='text' name='from_name'
            placeholder='Your name'/>
            <label for='email'>Email</label>
            <input id='email' type='email' name='reply_to'  
            placeholder='Your email' />
           <label for='message'>Message</label>
           <textarea id='message' name='message' 
           placeholder="Let's talk about it..."/>
           <button type='submit'>send</button>

       </form>  */}
                    </div>
                    <div className="col-4">
                        <div class="col-md-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <img src={process.env.PUBLIC_URL + "/location_icon.png"} style={{width:"6rem"}}/>
                                    <p>Room No-197
                                        Vishweswaraiya Hostel
                                        IIT BHU ,Varanasi
                                    </p>
                                </li>
                                <br/>
                                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                    <img src={process.env.PUBLIC_URL + "/call_icon.png"} style={{width:"6rem"}}/>
                                    <p>+918318351970</p>
                                </li>

                                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                    <img src={process.env.PUBLIC_URL +"/mail_icon.png"} style={{width:"8rem"}}/>
                                    <p>contact@owork.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footerr />
        </>
    );
}

export default Contact;