package net.javaguides.springboot.model;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public class technician {
      private String name;
    private String phone;
    private LocalDate dob;
    private String address;
    private int rating;
    private String email;
    private String areaofexpertise;
    private String password;
    private String city;
    private String state;
    private String zip;
    
    
    
   public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getZip() {
        return zip;
    }
    public void setZip(String zip) {
        this.zip = zip;
    }
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
   

   private List<reviews> assignedreviews;
   private List<orders> assignedorders;
   
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
public int getRating() {
    return rating;
}
public void setRating(int rating) {
    this.rating = rating;
}
    
    
}
