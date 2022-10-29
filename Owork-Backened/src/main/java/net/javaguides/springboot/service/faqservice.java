package net.javaguides.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.dao.FaqDao;
import net.javaguides.springboot.model.faqs;

@Service
public class faqservice {
    
    @Autowired
    private FaqDao faqdao;
    
    public List<faqs> getAllfaqs()
    {
        return FaqDao.getallfaq();
    }

}
