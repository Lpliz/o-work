package net.javaguides.springboot.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.customer;
import net.javaguides.springboot.model.technician;

@Repository
public class customerdao {
    
    @Autowired
    private JdbcTemplate jdbctemplate;
    
    public void customerdao()
    {
        
    }
    
    public int createtablecustomer()
    {
       String query="CREATE TABLE IF NOT EXISTS customer\n"
               + "(\n"
               + "    name VARCHAR(255) ,\n"
               + "    address VARCHAR(255) ,\n"
               + "    phone VARCHAR(50) NOT NULL,\n"
               + "    email VARCHAR(255) NOT NULL,\n"
               + "    password VARCHAR(255) , \n"
               + "    city VARCHAR(255) , \n"
               + "    state VARCHAR(255) , \n"
               + "    zip VARCHAR(255) , \n"
               + "    PRIMARY key (email)  \n"
               + ");";
       int update =  this.jdbctemplate.update(query);
       return update;
        
    }
    public void insertcustomer(customer cust)
    {
        String query="insert into customer values(?,?,?,?,?,?,?,?)";
        this.jdbctemplate.update(query,cust.getName(),cust.getAddress(),cust.getPhone(),cust.getEmail(),cust.getPassword(),cust.getCity(),cust.getState(),cust.getZip());
        System.out.println("successfully inserted");
        
    }
    
    public int countbyemail(String email)
    {
        String query="select count(*) from customer where email = ? ";
        return this.jdbctemplate.queryForObject(query,Integer.class,email);
    }
    
    public int countTotalCust()
    {
        return this.jdbctemplate.queryForObject("select count(*) from customer", Integer.class);
    }
    
    public customer getcustinfo(String email)
    {
        return this.jdbctemplate.queryForObject("select * from customer where email = ?", new BeanPropertyRowMapper<customer>(customer.class),email);
    }

    public int matchthepassword(String email, String password) {
        // TODO Auto-generated method stub
        String sql="select count(*) from customer where email = ? && password = ? ";
        return jdbctemplate.queryForObject(sql, Integer.class,email,password);
        
    }


}
