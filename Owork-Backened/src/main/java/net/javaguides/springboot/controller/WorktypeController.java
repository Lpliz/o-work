package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.worktype;
import net.javaguides.springboot.service.WorktypeSerImpl;

@RestController
public class WorktypeController {
    
    
    @Autowired
    WorktypeSerImpl worktypeserimpl;
    
    
    
    @GetMapping("/api/worktype/getall")
    public List<worktype> getAll()
    {
        return worktypeserimpl.getallWork();
    }
    
    @GetMapping("/api/worktype/{Work}")
    public worktype getAllbyname(@PathVariable String Work)
    {
        return worktypeserimpl.getallWorkbyname(Work);
    }
    
    @PostMapping("/api/admin/addworktype")
    public void addworktype(@RequestBody worktype wkt)
    {
        worktypeserimpl.addworktype(wkt);
    }
    
    @GetMapping("/api/admin/deletework/{name}")
    public void deletetch(@PathVariable String name)
    {
        worktypeserimpl.deletework(name);
    }
    
    

}
