package net.javaguides.springboot.model;

import java.time.LocalDate;

public class admin {
    
    
    private String name;
   
    private int officeid;
    private LocalDate dob;
    private String phone;
    private  String email;
    private String password;
    
      public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
   
    public int getOfficeid() {
        return officeid;
    }
    public void setOfficeid(int officeid) {
        this.officeid = officeid;
    }
    public LocalDate getDob() {
        return dob;
    }
    public void setDob(LocalDate dob) {
        this.dob = dob;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    
    
    
    
    
    
    

}
