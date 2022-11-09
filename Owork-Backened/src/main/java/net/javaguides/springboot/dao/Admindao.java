package net.javaguides.springboot.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


@Repository
public class Admindao {
    
    @Autowired
    private JdbcTemplate jdbctemplate;
    
    public int createtableadmin()
    {
       String query="CREATE TABLE IF NOT EXISTS admin\n"
               + "(\n"
               + "    name VARCHAR(255) ,\n"
               + "    phone VARCHAR(50) NOT NULL,\n"
               + "    email VARCHAR(255) NOT NULL,\n"
               + "    password VARCHAR(255) , \n"
               + "    dob Date              , \n"
               + "    PRIMARY key (email)  ,\n"
               +"     officeid int  NOT NULL       , \n  "  
               + "    FOREIGN KEY (officeid) REFERENCES Offices(id) ON DELETE CASCADE \n"
               + ");";
       int update =  this.jdbctemplate.update(query);
       return update;
        
    }

    public int matchthepassword(String email, String password) {
        // TODO Auto-generated method stub
        String sql="select count(*) from admin where email = ? && password = ? ";
        return this.jdbctemplate.queryForObject(sql, Integer.class,email,password);
    }
    
    
    

}
