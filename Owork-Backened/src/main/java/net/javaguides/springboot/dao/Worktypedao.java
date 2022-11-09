package net.javaguides.springboot.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.worktype;

@Repository
public class Worktypedao {
    
    @Autowired
    private JdbcTemplate jdbctemplate;
    
    public int createtableworktype()
    {
       String query="CREATE TABLE  IF NOT EXISTS worktype\n"
               + "    (workname VARCHAR(255) ,\n"
               + "    description VARCHAR(255) , \n"
               + "    adminemail VARCHAR(255) NOT NULL , \n"
               + "    PRIMARY KEY(workname) , \n"
               + "    FOREIGN KEY (adminemail) REFERENCES admin(email) ON DELETE CASCADE \n"
               + ");";
       int update =  this.jdbctemplate.update(query);
       return update;
        
    }
    public void insertworktype(worktype wkt)
    {
        String query="insert into worktype(workname,description,adminemail) values(?,?,?)";
        this.jdbctemplate.update(query,wkt.getWorkname(),wkt.getDescription(),wkt.getAdminemail());
        
        
    }
    
    public List<worktype> getall()
    {
        String queryy="select * from worktype";
        return this.jdbctemplate.query(queryy,new BeanPropertyRowMapper<worktype>(worktype.class));
    }
    public worktype getbyworkname(String name) {
        // TODO Auto-generated method stub

        String query = "select * from worktype where workname = ? ";
        return this.jdbctemplate.queryForObject(query, new BeanPropertyRowMapper<worktype>(worktype.class),name);
        
        
    }
    public void deleteWork(String name) {
        // TODO Auto-generated method stub
        String sql="delete from worktype where workname=?";
        this.jdbctemplate.update(sql,name);
        
    }

}
