package net.javaguides.springboot.model;

import java.util.Date;

public class requests {
    
    private int requestsid;
    private String description;
    private Date dateofrequest;
    private technician requestedtechnician;
    private customer requestedcustomer;
    public int getRequestsid() {
        return requestsid;
    }
    public void setRequestsid(int requestsid) {
        this.requestsid = requestsid;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Date getDateofrequest() {
        return dateofrequest;
    }
    public void setDateofrequest(Date dateofrequest) {
        this.dateofrequest = dateofrequest;
    }
    public technician getRequestedtechnician() {
        return requestedtechnician;
    }
    public void setRequestedtechnician(technician requestedtechnician) {
        this.requestedtechnician = requestedtechnician;
    }
    public customer getRequestedcustomer() {
        return requestedcustomer;
    }
    public void setRequestedcustomer(customer requestedcustomer) {
        this.requestedcustomer = requestedcustomer;
    }
    
    

}
