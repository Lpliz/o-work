package net.javaguides.springboot.model;

public class reviews {
    
    private int reviewid;
    private String description;
    private int rating;
    private String technicianemail;
    private String customeremail;
    
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
    
   

}
