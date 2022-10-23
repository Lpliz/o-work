package net.javaguides.springboot.model;

public class reviews {
    private int reviewid;
    private String description;
    private int rating;
    private int technicianid;
    private int customerid;
    public int getReviewid() {
        return reviewid;
    }
    public void setReviewid(int reviewid) {
        this.reviewid = reviewid;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public int getRating() {
        return rating;
    }
    public void setRating(int rating) {
        this.rating = rating;
    }
    public int getTechnicianid() {
        return technicianid;
    }
    public void setTechnicianid(int technicianid) {
        this.technicianid = technicianid;
    }
    public int getCustomerid() {
        return customerid;
    }
    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }
    

}
