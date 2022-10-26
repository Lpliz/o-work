package net.javaguides.springboot.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.orders;
import net.javaguides.springboot.model.reviews;

@Repository
public class OrderDao {
    
    @Autowired
    private JdbcTemplate jdbctemplate;
    
    public void createOrderTable()
    {
        String sql="CREATE TABLE IF NOT EXISTS  orders \n"
                + "(\n"
                + "    orderid int NOT NULL AUTO_INCREMENT , \n"
                + "    description VARCHAR(255) , \n"
                + "    orderstatus VARCHAR(255) , \n"
                + "    date Date ,\n"
                + "    technicianemail VARCHAR(255) not null ,\n"
                + "    customeremail VARCHAR(255) not null ,\n"
                + "    PRIMARY KEY (orderid) ,\n"
                + "    FOREIGN KEY (technicianemail) REFERENCES technician(email) ,\n"
                + "    FOREIGN KEY (customeremail) REFERENCES customer(email)\n"
                + ");";
        this.jdbctemplate.update(sql);
    }
    public void insertOrdertable(orders Order)
    {
        String sql="insert into orders values(?,?,?,?)";
        this.jdbctemplate.update(sql,Order.getDescription(),"new",Order.getTechnicianemail(),Order.getCustomeremail());
        
    }
    
    public List<orders> searchByTechemail(String email)
    {
        String sql="select * from orders where technicianemail=?";
        return this.jdbctemplate.query(sql,new BeanPropertyRowMapper<orders>(),email);
    }
    
    public void updateOrderStatus(int id,String orderStatus)
    {
        String sql="update orders set orderstatus=? where orderid = ?";
        this.jdbctemplate.update(sql,orderStatus,id);
                
    }

}
