package com.seif.jwt.backend.controllers;

import com.seif.jwt.backend.entities.User;
import com.seif.jwt.backend.services.UserService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class UserController {
    UserService userService;
    @GetMapping("/user")
    public List<User> getall() {
        return userService.getAll();
    }

    @DeleteMapping("/user/{userId}")
    public void delete(@PathVariable long userId) throws Exception {
        userService.delete(userId);
    }

    @PostMapping("/user/{userId}")
    public void delete(@PathVariable long userId, @RequestBody User u)   {

        u.setId(userId);
        userService.update(userId,u);
    }
}
