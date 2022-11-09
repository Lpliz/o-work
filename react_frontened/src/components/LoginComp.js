import React , {Fragment,useEffect,useState} from "react";
import {Form , FormGroup , Input , Container , Button , Label , Row , Col } from "reactstrap";
import {toast,ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";

import axios from "axios";

import baseurl from "../api/bootapi";
import Navbarr from "./Navbarr";
import Footerr from "./Footer";
import TechDash from "./TechnicianDash";
import CustDash from "./CustomerDash";

const Login = () => {
    useEffect(()=>{
        document.title="Login"
    } , []);
    const [Tech , Addtech] = useState({});
    function Handleform(e) {
        console.log(Tech);
        Posttoserver(Tech);
        e.preventDefault();

    };
    const navigatetotechdash = useNavigate();
    const NavigateToTechDash=(data)=>{
      navigatetotechdash(`/api/technician/${data}`);
    }
    const navigatetocustdash = useNavigate();
    const NavigateToCustDash=(data)=>{
      console.log(`/api/customer/${data}`);
      navigatetocustdash(`/api/customer/${data}`);
    }
    const navigatetoadmindash = useNavigate();
    const NavigateToAdminDash=(data)=>{
      console.log(`/api/customer/${data}`);
      navigatetoadmindash(`/api/admin/${data}`);
    }
    const Posttoserver =(data) => {
        axios.post(`${baseurl}/api/login`,data).then(
        (response)=>{
            console.log(response.data);
                if(response.data==1)
                {
                  
                  NavigateToTechDash(data.email);
                  

                }
                else if(response.data==2)
                {
                  NavigateToCustDash(data.email);

                }
                else if(response.data==3)
                {
                  NavigateToAdminDash(data.email);
                }
                else{
                  toast.error("incorrect email or password");

                }

            console.log("success");
            // toast.success("customer signup successfully");



              } , 
              (error) => {
                  console.log(error);

              }
              )
        
               };
    const navigatetosinup = useNavigate();
    const Navigatesignup=()=>{
        navigatetosinup("/api/customer/signup");
    }
    const navigate = useNavigate();
    const Navigatehome=()=>{
        navigate("/");
    }
    return (
        <div  >
          <Navbarr />
        <div className="">
            <div className="shadow  mb-5  rounded  my -5">
                <div className="text-center">
                  <br />
                <h3>Login form </h3>
                <br />
                </div>
            
            </div>
            <ToastContainer />
            <Fragment>
                
                <center>
                <Form onSubmit={Handleform} >
               <Row>
    <Col>
    </Col>
    <Col >
      <FormGroup>
        <Label for="email">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="enter your email here"
          type="email"
          onChange={(e)=>{
            Addtech({...Tech,email:e.target.value}) }}
        />
      </FormGroup>
    </Col>
    <Col>
    </Col>
    </Row>
    <Row>
        <Col>
        </Col>
        <Col >
        <FormGroup>
        <Label for="password">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          placeholder="enter your password here"
          type="password"
          onChange={(e)=>{
            Addtech({...Tech,password:e.target.value}) }}
        />
      </FormGroup>
    </Col>
    <Col>
    </Col>
  </Row>
 
  
    <Container>
                        <Button type="submit" color="success">Login</Button>{'  '}
                        <Button type="reset" color="warning ml-4"   >Clear</Button>
                    </Container>
            <Row>
              <Col>
              </Col>
              <Col>
              <br />
               Not registered yet ? 
               <br />
               <Button onClick={Navigatesignup}className="mb-5">Signup</Button>
              </Col>
              <Col>
              </Col>
            </Row>

</Form>
</center>
            </Fragment>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Footerr />
        </div>

    );
}
export default Login;