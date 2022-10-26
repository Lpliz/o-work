package net.javaguides.springboot.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.reviews;
import net.javaguides.springboot.model.technician;

@Repository
public class reviewsDao {
    
    
    @Autowired
    private JdbcTemplate jdbctemplate;
    
    
    
    public void createReviews()
    {
        String sql="CREATE TABLE IF NOT EXISTS reviews\n"
                + "(\n"
                + "    reviewid int NOT NULL AUTO_INCREMENT , \n"
                + "    description VARCHAR(255) ,\n"
                + "    rating int , \n"
                + "    technicianemail VARCHAR(255) NOT NULL , \n"
                + "    customeremail VARCHAR(255) NOT NULL ,\n"
                + "    PRIMARY KEY (reviewid) , \n"
                + "    FOREIGN KEY (technicianemail) REFERENCES technician(email) ON DELETE CASCADE ,\n"
                + "    FOREIGN KEY (customeremail) REFERENCES customer(email) ON DELETE CASCADE \n"
                + "\n"
                + ");";
        
        this.jdbctemplate.update(sql);
    }
    
    
    public void insertReviews(reviews Review)
    {
        String sql="insert into reviews values(?,?,?,?)";
        this.jdbctemplate.update(sql,Review.getDescription(),Review.getRating(),Review.getTechnicianemail(),Review.getCustomeremail());
    }
    
    public List<reviews> getallbyTechEmail(String email)
    {
        String sql="select * from reviews where technicianemail=?";
        return this.jdbctemplate.query(sql,new BeanPropertyRowMapper<reviews>(),email);
        
        
    }
    
    public List<reviews> getallbyCustomerEmail(String email)
    {
        String sql="select * from reviews where customeremail=?";
        return this.jdbctemplate.query(sql,new BeanPropertyRowMapper<reviews>(),email);
        
    }

}
