package net.javaguides.springboot.model;

import java.util.Date;
import java.util.List;

public class customer {
    
   
    private String name;
    private String phone;
    private String address;
    private String email;
    private String password;
    
    
    
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    private List<reviews> reviewsgiven;
    private List<requests> requestedrequests;
    private List<orders> requestedorders;
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    
   
    public List<reviews> getReviewsgiven() {
        return reviewsgiven;
    }
    public void setReviewsgiven(List<reviews> reviewsgiven) {
        this.reviewsgiven = reviewsgiven;
    }
    public List<requests> getRequestedrequests() {
        return requestedrequests;
    }
    public void setRequestedrequests(List<requests> requestedrequests) {
        this.requestedrequests = requestedrequests;
    }
    public List<orders> getRequestedorders() {
        return requestedorders;
    }
    public void setRequestedorders(List<orders> requestedorders) {
        this.requestedorders = requestedorders;
    }
    

}