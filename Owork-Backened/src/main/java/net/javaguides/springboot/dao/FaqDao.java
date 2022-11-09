package net.javaguides.springboot.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.worktype;


@Repository
public class Faqdao {
    
    @Autowired
    private JdbcTemplate jdbctemplate;
    
    public int createtablefaqs()
    {
       String query="CREATE TABLE  IF NOT EXISTS faqs\n"
               + "   ( id int NOT NULL AUTO_INCREMENT ,\n"
               + "    question VARCHAR(255) , \n"
               + "    answer VARCHAR(255) , \n   "
               + "    PRIMARY KEY(id)   \n"
               + ");";
       int update =  this.jdbctemplate.update(query);
       return update;
        
    }
   

}
