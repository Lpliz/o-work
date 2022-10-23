package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.customer;
import net.javaguides.springboot.service.customerserviceimpl;

@RestController
public class customercontroller {
    
    @Autowired
    customerserviceimpl custserviceimpl;
    
    @PostMapping("/signupcustomer")
    public void sigupcust(@RequestBody customer cust)
    {
        custserviceimpl.addcustomer(cust);
    }
    
    

}
