package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.technician;
import net.javaguides.springboot.service.TechnicianServiceImpl;


@RestController
public class TechnicianController {
    
    @Autowired
    TechnicianServiceImpl tchserviceimpl;
    
    @PostMapping("/api/technician/signup")
    public int addtch(@RequestBody technician tch)
    {
       return tchserviceimpl.addtechnician(tch);
        //return ResponseEntity.ok("successfully added technician");
    }
    
    @GetMapping("/api/technician/getall")
    public List<technician> getalltch()
    {
       return tchserviceimpl.getalltechnician();
    }
    

    
    @GetMapping("/api/technician/getbywork/{work}")
    public List<technician> findbywork(@PathVariable String work)
    {
        return tchserviceimpl.Getbyworkdomain(work);
        
    }
    
    @GetMapping("/api/technician/countall")
    public int CountAllTech()
    {
        return tchserviceimpl.CountTech();
    }
    
    @GetMapping("/api/technician/{email}")
    public technician getinfo(@PathVariable String email)
    {
        return tchserviceimpl.tchinfo(email);
    }
    
    @GetMapping("/api/admin/deletetechnician/{email}")
    public void deletetch(@PathVariable String email)
    {
        tchserviceimpl.deleteTch(email);
    }
    
    

}
