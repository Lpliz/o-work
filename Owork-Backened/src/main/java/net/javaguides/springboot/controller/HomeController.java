package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.faqs;
import net.javaguides.springboot.service.faqservice;

@RestController
public class HomeController {
    
    @Autowired
    private faqservice Faqservice;
    
    
    @GetMapping("/api/getallfaqs")
    public List<faqs> getallfaq()
    {
        return Faqservice.getAllfaqs();
        
        
    }

}
