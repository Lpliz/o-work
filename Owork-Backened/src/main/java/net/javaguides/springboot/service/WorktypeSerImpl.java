package net.javaguides.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.dao.Worktypedao;
import net.javaguides.springboot.model.worktype;

@Service
public class WorktypeSerImpl {
    
    @Autowired
  private  Worktypedao workdao;
    
    public List<worktype> getallWork()
    {
        return  workdao.getall();
    }

    public worktype getallWorkbyname(String work) {
        // TODO Auto-generated method stub
        return workdao.getbyworkname(work);
    }
    
    public void addworktype(worktype wktp)
    {
        workdao.insertworktype(wktp);
    }

    public void deletework(String name) {
        // TODO Auto-generated method stub
        workdao.deleteWork(name);
        
    }
    
    

}
