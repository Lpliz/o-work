package net.javaguides.springboot.model;

import java.sql.Blob;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public class technician {
 
    private String name;
    private String phone;
    private LocalDate dob;
    private String address;
    private String email;
    private String areaofexpertise;
    private String password;
    
    
    
    
   public LocalDate getDob() {
        return dob;
    }
    public void setDob(LocalDate dob) {
        this.dob = dob;
    }
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
    public String getAreaofexpertise() {
        return areaofexpertise;
    }
    public void setAreaofexpertise(String areaofexpertise) {
        this.areaofexpertise = areaofexpertise;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
   
private List<requests> assignedrequests;
   private List<reviews> assignedreviews;
   private List<orders> assignedorders;
public List<requests> getAssignedrequests() {
    return assignedrequests;
}
public void setAssignedrequests(List<requests> assignedrequests) {
    this.assignedrequests = assignedrequests;
}
public List<reviews> getAssignedreviews() {
    return assignedreviews;
}
public void setAssignedreviews(List<reviews> assignedreviews) {
    this.assignedreviews = assignedreviews;
}
public List<orders> getAssignedorders() {
    return assignedorders;
}
public void setAssignedorders(List<orders> assignedorders) {
    this.assignedorders = assignedorders;
}
   
    
    
}
