package net.javaguides.springboot.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.faqs;
import net.javaguides.springboot.model.technician;

@Repository
public class FaqDao {
    
    @Autowired
    private static JdbcTemplate jdbctemplate;
    
    
   


    public static  List<faqs> getallfaq() {
        // TODO Auto-generated method stub
        String sql="select * from faqs ";
        
        return  jdbctemplate.query(sql,new BeanPropertyRowMapper<faqs>(faqs.class)) ;
    }
    
    
    public void createfaq()
    {
        String sql="create table faqs(id int not null AUTO_increment primary key ,question varchar(255),answer varchar(255) )";
        this.jdbctemplate.update(sql);
        
    }

}
