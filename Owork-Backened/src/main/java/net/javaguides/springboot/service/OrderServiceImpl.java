package net.javaguides.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.dao.OrderDao;
import net.javaguides.springboot.model.orders;

@Service
public class OrderServiceImpl {
    
    @Autowired
    OrderDao orderdao;
    
    
    public void addorder(orders Order)
    {
        orderdao.insertOrdertable(Order);
        
    }
    
    public void updateOrderStatus(int orderid,String ordersatus)
    {
         orderdao.updateOrderStatus(orderid, ordersatus);
    }
    
    public List<orders> getbyTechemail(String email)
    {
        return orderdao.searchByTechemail(email);
    }

    public List<orders> getbycustemail(String custemail) {
        // TODO Auto-generated method stub
        return orderdao.searchbycustemail(custemail);
    }
    
    

}
