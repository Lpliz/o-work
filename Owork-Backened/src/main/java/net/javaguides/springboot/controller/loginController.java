package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.user;
import net.javaguides.springboot.service.UserServiceImpl;

@RestController
public class loginController {
    
    @Autowired
    UserServiceImpl userserviceimpl;
    
    
    @PostMapping("/api/login")
    public int login(@RequestBody user User)
    {
      return  userserviceimpl.logincheck(User);
        
        
    }

}
