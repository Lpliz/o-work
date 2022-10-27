package net.javaguides.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.dao.techniciandao;
import net.javaguides.springboot.model.technician;

@Service
public class TechnicianServiceImpl {
    
    @Autowired
    techniciandao tchdao;
    
    public void addtechnician(technician tch)
    {
        int cttch = tchdao.countbyemail(tch.getEmail());
        if(cttch==0)
        {
            tchdao.inserttechnician(tch);
            
            System.out.println("successfully inserted technician");
        }
        else
        {
            System.out.println("user already exist");
        }
    }
    
    public List<technician> getalltechnician()
    {
      return  tchdao.getall();
    }
    
    public List<technician> Getbyworkdomain(String work)
    {
        return tchdao.getbyworkdomain(work);
        
    }
    
    public technician getbyemail(String email)
    {
        return tchdao.findbyemail(email);
    }
    
    public int CountTech()
    {
        return tchdao.counttotalTech();
    }

}
