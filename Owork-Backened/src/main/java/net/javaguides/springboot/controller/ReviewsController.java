package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.reviews;
import net.javaguides.springboot.service.ReviewsServiceImpl;

@CrossOrigin
@RestController
public class ReviewsController {
    
    @Autowired
    ReviewsServiceImpl Reviewsserviceimpl;
    
    
    @GetMapping("/api/getallreviews")
    public List<reviews> Getallreviews(@RequestParam(name="techemail")  String techemail )
    {
        return Reviewsserviceimpl.getAllreviewsbyTechemail(techemail);
        
    }
    
    @PostMapping("/api/addreview")
    public ResponseEntity<String> addReview(@RequestBody reviews Review)
    {
        Reviewsserviceimpl.addreview(Review);
        return  ResponseEntity.ok("Successfully added review");
    }
    
    
    

}
