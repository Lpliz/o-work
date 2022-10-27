package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> addtch(@RequestBody technician tch)
    {
        tchserviceimpl.addtechnician(tch);
        return ResponseEntity.ok("successfully added technician");
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
    
    
    
    

}
