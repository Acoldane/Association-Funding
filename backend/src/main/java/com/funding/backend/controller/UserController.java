package com.funding.backend.controller;

import com.funding.backend.beans.User;
import com.funding.backend.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/User")
public class UserController {
    @Autowired
    UserServiceImpl userService;

    @PostMapping
    public void createUser(@RequestBody User user) {
        userService.save(user);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable(value = "id") Long id, @RequestBody User user) {
        userService.update(user, id);
    }

    @DeleteMapping("/{id}")
    public void deleteUserId(@PathVariable(value = "id") Long id) {
        userService.delete(id);
    }

    @DeleteMapping
    public void deleteUserId(@RequestBody User user) {
        userService.deleteUser(user);
    }

    @GetMapping("/{id}")
    public User findUser(@PathVariable(value = "id") Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/connect")
    public User findUserByCredentials(@RequestBody User user) {
        return userService.getUserByCredentials(user.getEmail(), user.getPassword());
    }

}
