package com.claswsworld.demo.student;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
@RestController
@RequestMapping(path = "/students")
@CrossOrigin
public class StudentController {
    @GetMapping
    public List<Student> getAllStudent(){
        return  List.of(
                new Student(UUID.randomUUID(),"james","Bond","james.bond@gmail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(),"Elisa","Tamara","elisa.tamara@gmail.com", Student.Gender.FEMALE)
        );
    }
}
