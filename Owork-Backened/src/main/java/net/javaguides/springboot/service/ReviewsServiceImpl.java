package net.javaguides.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.dao.reviewsDao;
import net.javaguides.springboot.model.reviews;

@Service
public class ReviewsServiceImpl {
    
    @Autowired
    reviewsDao ReviewsDao;
    
    
    public void addreview(reviews Review)
    {
        ReviewsDao.insertReviews(Review);
    }
    
    
    public List<reviews> getAllreviewsbyTechemail(String email)
    {
        return ReviewsDao.getallbyTechEmail(email);
        
    }
    

}
