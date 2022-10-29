import React  from "react";
import {Card,CardBody,CardTitle ,Button , Container } from "reactstrap";
function Tech({Emp}) {
    return (
        <div >
            
            <center>
            <Card className=" text-center w-25 p-3 my-5">
                <CardBody className="text-center">
                    <CardTitle>Name : {Emp.name}</CardTitle>
                    <CardTitle>City : {Emp.city}</CardTitle>
                    <Container>
                    <Button type="Button" className="mr-3" color="danger ">Delete</Button>
                    <Button type="Button" className="ml-3"  color="info">Update</Button>
                    </Container>
                </CardBody>
            </Card>
            </center> 

        </div>
    );


}

export default Tech;