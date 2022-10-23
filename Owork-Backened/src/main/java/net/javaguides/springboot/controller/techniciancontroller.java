package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.technician;
import net.javaguides.springboot.service.technicianserviceimpl;

@RestController
public class techniciancontroller {
    
    @Autowired
    technicianserviceimpl tchserviceimpl;
    
    @PostMapping("/addtechnician")
    public void addtch(@RequestBody technician tch)
    {
        tchserviceimpl.addtechnician(tch);
    }
    
    @GetMapping("/getalltechnician")
    public List<technician> getalltch()
    {
       return tchserviceimpl.getalltechnician();
    }
    

}
