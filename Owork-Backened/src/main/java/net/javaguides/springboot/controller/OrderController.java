package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.orders;
import net.javaguides.springboot.service.OrderServiceImpl;

@RestController
public class OrderController {
    
    @Autowired
    OrderServiceImpl orderserviceimpl;
    
    
    @PostMapping("/api/addorder")
    public void addOrder(@RequestBody orders Order)
    {
        orderserviceimpl.addorder(Order);
        
    }
    
    @GetMapping("/api/getallorders/{techemail}")
    public List<orders> getAllorders(@PathVariable String techemail)
    {
        return orderserviceimpl.getbyTechemail(techemail);
        
    }
    
    @PutMapping("/api/updateorderstatus")
    public void updateOrderStatus(@RequestParam(name="orderid") int orderid , @RequestParam(name="currstatus") String currstatus)
    {
         orderserviceimpl.updateOrderStatus(orderid, currstatus);
        
    }
    
    

}
