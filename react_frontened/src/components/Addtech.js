import React , {Fragment,useEffect,useState} from "react";
import {Form , FormGroup , Input , Container , Button , Label , Row , Col } from "reactstrap";
import {toast,ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";

import axios from "axios";

import baseurl from "../api/bootapi";
import Navbarr from "./Navbarr";
import Footerr from "./Footer";

const TechnicianSignup = () => {
    useEffect(()=>{
        document.title="Add technician"
    } , []);
    const [Tech , Addtech] = useState({});
    function Handleform(e) {
        console.log(Tech);
        Posttoserver(Tech);
        e.preventDefault();

    };
    const Posttoserver =(data) => {
        axios.post(`${baseurl}/api/technician/signup`,data).then(
        (response)=>{
            if(response.data==1)
            {
                toast.error("user already exist");
            }
            else
            {
            console.log(data);
            console.log("success");
            toast.success("Technician added successfully");
            }

        } , 
        (error) => {
            console.log(error);

        }
        )
    };
    const navigate = useNavigate();
    const Navigatehome=()=>{
        navigate("/");
    }
    return (
        <div  >
            <Navbarr />
        <div className="">
                    <div className="shadow   rounded  my -5">
                        <div className="text-center">
                            <br />
                        <h3>Technician Register Form</h3>
                        <br />
                        </div>
                
                
                    </div>
            <ToastContainer />
            <Fragment>
                
                <center>
                <Form onSubmit={Handleform} >
                <Row>
                <Col></Col>

                <Col >
                <FormGroup>
                    <Label for="name">
                    Name 
                    </Label>
                    <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="enter your name here"
                    onChange={(e)=>{
                        Addtech({...Tech,name:e.target.value}) }} 
                    />
                </FormGroup>
                </Col>
                <Col></Col>
            </Row>
            <Row>
    <Col>
    </Col>
    <Col >
      <FormGroup>
        <Label for="exampleEmail">
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
  <Row>
    <Col>
    </Col>
    <Col>
  <FormGroup>
    <Label for="address">
      Address
    </Label>
    <Input
      id="address"
      name="address"
      placeholder="enter your address here"
      type="text"
      onChange={(e)=>{
        Addtech({...Tech,address:e.target.value}) }}
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
        <Label for="exampleCity">
          City
        </Label>
        <Input
          id="exampleCity"
          name="city"
          type="text"
          placeholder="enter your city here"
          onChange={(e)=>{
            Addtech({...Tech,city:e.target.value}) }}
        />
      </FormGroup>
    </Col>
    <Col>
    </Col>
    </Row>
    <Row>
        <Col></Col>

    <Col >
      <FormGroup>
        <Label for="state">
          State
        </Label>
        <Input
          id="state"
          name="state"
          type="text"
          placeholder="enter your state here"
          onChange={(e)=>{
            Addtech({...Tech,state:e.target.value}) }}
        />
      </FormGroup>
    </Col>
    <Col>
    </Col>
    </Row>
    <Row>
        <Col></Col>

    <Col >
      <FormGroup>
        <Label for="">
          Zip
        </Label>
        <Input
          id="zip"
          name="zip"
          type="text"
          placeholder="enter your zip here"
          onChange={(e)=>{
            Addtech({...Tech,zip:e.target.value}) }}
        />
      </FormGroup>
    </Col>
    <Col></Col>
  </Row>
  <Row>
        <Col></Col>

    <Col >
      <FormGroup>
        <Label for="">
          Area of expertise 
        </Label>
        <Input
          id="areaofexpertise"
          name="areaofexpertise"
          type="text"
          placeholder="enter your area of expertise here"
          onChange={(e)=>{
            Addtech({...Tech,areaofexpertise:e.target.value}) }}
        />
      </FormGroup>
    </Col>
    <Col></Col>
  </Row>
  <Row>
        <Col></Col>

    <Col >
      <FormGroup>
        <Label for="">
         Phone number
        </Label>
        <Input
          id="phone"
          name="phone"
          placeholder="enter your mobile number here"

          type="tel"
          onChange={(e)=>{
            Addtech({...Tech,phone:e.target.value}) }}
        />
      </FormGroup>
    </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col>
    </Col>
    <Col >
      <FormGroup>
        <Label for="dob">
          Date of Birth
        </Label>
        <Input
          id="dob"
          name="dob"
          placeholder="enter your date of birth here"
          type="date"
          onChange={(e)=>{
            Addtech({...Tech,dob:e.target.value}) }}
        />
      </FormGroup>
    </Col>
    <Col>
    </Col>
    </Row>
    
    <Container>
                        <Button type="submit" color="info">Signup technician</Button>{'  '}
                        <Button type="reset" color="warning ml-4"   >Clear</Button>
                    </Container>
</Form>
</center>
            </Fragment>
        </div>
        <br />
        <Footerr />
        </div>

    );
}
export default TechnicianSignup;