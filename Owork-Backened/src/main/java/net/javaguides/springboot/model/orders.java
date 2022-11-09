package net.javaguides.springboot.model;

import java.time.LocalDateTime;
import java.util.Date;

public class orders {
    
    
    private int orderid;
    private String description;
    private Date date;
    private String technicianemail;
    private String customeremail;
    private String orderstatus;
   
    public int getOrderid() {
        return orderid;
    }
    public void setOrderid(int orderid) {
        this.orderid = orderid;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
   
    
    public String getTechnicianemail() {
        return technicianemail;
    }
    public void setTechnicianemail(String technicianemail) {
        this.technicianemail = technicianemail;
    }
    public String getCustomeremail() {
        return customeremail;
    }
    public void setCustomeremail(String customeremail) {
        this.customeremail = customeremail;
    }
    public String getOrderstatus() {
        return orderstatus;
    }
    public void setOrderstatus(String orderstatus) {
        this.orderstatus = orderstatus;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    
    
    
    
   

}
