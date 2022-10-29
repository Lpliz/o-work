package net.javaguides.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.dao.customerdao;
import net.javaguides.springboot.dao.techniciandao;
import net.javaguides.springboot.model.user;

@Service
public class UserServiceImpl {
    
    @Autowired
    techniciandao Tchdao;
    
    @Autowired
    customerdao Custdao;
    

    public int logincheck(user User) {
        
      
      
          int fin1 = Tchdao.matchthepassword(User.getEmail(),User.getPassword());
          int fin2 = Custdao.matchthepassword(User.getEmail(),User.getPassword());
          System.out.println(fin1);
          System.out.println(fin2); 
          System.out.println(User.getEmail()); 
          System.out.println(User.getPassword());
          
          if(fin1>=1)
          {
             
              return 1;
              
          }
          else if(fin2>=1)
              {
             
              return 2;
              }
          else return 0;
          //return fin2;
         // return 200;
        
        
    }

}
