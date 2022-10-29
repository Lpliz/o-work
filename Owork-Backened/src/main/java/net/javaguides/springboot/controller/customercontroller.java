package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.customer;
import net.javaguides.springboot.service.CustomerServiceImpl;


@CrossOrigin
@RestController
public class customercontroller {
    
    @Autowired
    CustomerServiceImpl custserviceimpl;
    
    @PostMapping("/api/customer/signup")
    public int sigupcust(@RequestBody customer cust)
    {
        return custserviceimpl.addcustomer(cust);
        
        
    }
    
    @GetMapping("/api/customer/countall")
    public int CountCust()
    {
        return custserviceimpl.CountCust();
    }
    
    @GetMapping("/api/customer/{custemail}")
    public customer customerinfo(@PathVariable String custemail)
    {
        return custserviceimpl.custinfo(custemail);
        
    }
    
    

}
