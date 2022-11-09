package net.javaguides.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import net.javaguides.springboot.dao.Admindao;
import net.javaguides.springboot.dao.Faqdao;
import net.javaguides.springboot.dao.OrderDao;
import net.javaguides.springboot.dao.Worktypedao;
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
    
    @Autowired
    private Worktypedao workdao;
    
    @Autowired
    private Faqdao faqdao;
    
    @Autowired
    private Admindao admindao;
    
   
    
    
	public static void main(String[] args) {
		SpringApplication.run(OworkBackenedApplication.class, args);
		
		
	}


    @Override
    public void run(String... args) throws Exception {
        this.admindao.createtableadmin();
        this.workdao.createtableworktype();
        System.out.println(this.techdao.createtabletechnician());
        System.out.println(this.Custodao.createtablecustomer());
        this.Reviewsdao.createReviews();
        this.orderdao.createOrderTable();
       
       
       
        
        // TODO Auto-generated method stub
        
    }
    
    
   @Bean
    public WebMvcConfigurer configure() {
        return new WebMvcConfigurer() {
            
            @Override
            public void addCorsMappings(CorsRegistry reg)
            {
                reg.addMapping("/**").allowedOrigins("*");
                
            }
            
        };
        
    }

}
