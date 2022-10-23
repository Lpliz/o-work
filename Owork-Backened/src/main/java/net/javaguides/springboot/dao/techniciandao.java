package net.javaguides.springboot.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.technician;


@Repository
public class techniciandao {
    
    @Autowired
    private JdbcTemplate jdbctemplate;
    
    public void techniciandao()
    {
      
       
    }
    public int createtabletechnician()
    {
       String query="CREATE TABLE  IF NOT EXISTS technician\n"
               + "(\n"   
               + "    name VARCHAR(255) ,\n"
               + "    dob Date NOT NULL,\n"
               + "    phone Varchar(15) ,\n"
               + "    address VARCHAR(255) ,\n"
               + "    email VARCHAR(255) NOT NULL,\n"
               + "    areaofexpertise VARCHAR(255) , \n"
               + "    password VARCHAR(255) , \n"
               + "    PRIMARY KEY(email)  \n"
               + ");";
       int update =  this.jdbctemplate.update(query);
       return update;
        
    }
    public void inserttechnician(technician tch)
    {
        String query="insert into technician(name,dob,phone,address,email,areaofexpertise,password) values(?,?,?,?,?,?,?)";
        this.jdbctemplate.update(query,tch.getName(),tch.getDob(),tch.getPhone(),tch.getAddress(),tch.getEmail(),tch.getAreaofexpertise(),tch.getPassword());
        
        
    }
    
    public technician findbyemail(String email)
    {
        String query = "select * from technician where email = ? ";
        return this.jdbctemplate.queryForObject(query, new BeanPropertyRowMapper<technician>(technician.class),email);
        
    }
    
    public int countbyemail(String email)
    {
        String query="select count(*) from technician where email = ? ";
        return this.jdbctemplate.queryForObject(query,Integer.class,email);
    }
    public List<technician> getall()
    {
        String sql="select * from technician";
        return this.jdbctemplate.query(sql, new BeanPropertyRowMapper<technician>(technician.class));
    }
    
    
}
