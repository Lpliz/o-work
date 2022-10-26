package net.javaguides.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.javaguides.springboot.dao.OrderDao;
import net.javaguides.springboot.dao.customerdao;
import net.javaguides.springboot.dao.reviewsDao;
import net.javaguides.springboot.dao.techniciandao;


@SpringBootApplication
public class OworkBackenedApplication implements CommandLineRunner {

    
    
    @Autowired
    private techniciandao techdao;
    
    @Autowired
    private customerdao Custodao;
    
    @Autowired
    private reviewsDao Reviewsdao;
    
    @Autowired
    private OrderDao orderdao;
    
    
	public static void main(String[] args) {
		SpringApplication.run(OworkBackenedApplication.class, args);
		
		
	}


    @Override
    public void run(String... args) throws Exception {
        
        System.out.println(this.techdao.createtabletechnician());
        System.out.println(this.Custodao.createtablecustomer());
        this.Reviewsdao.createReviews();
        this.orderdao.createOrderTable();
        // TODO Auto-generated method stub
        
    }

}
