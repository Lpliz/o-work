import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from "react-router-dom";

const Menu = () => {

    return (
        <div>
       <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/" action>About us</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/api/technician/signup" action>Register as a Technician</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/api/customer/signup" action>Sign up as a Customer</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/api/login" action> Login </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="faqs" action>FAQs</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="contactus" action>Contact us</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/showalltechnicians" action>Show all technicians</Link>
        </ListGroup>
        </div>

    );

}

export default Menu;