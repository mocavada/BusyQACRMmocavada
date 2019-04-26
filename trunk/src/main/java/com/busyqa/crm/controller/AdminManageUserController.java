package com.busyqa.crm.controller;

import com.busyqa.crm.message.response.ApiResponse;
import com.busyqa.crm.model.UserDto;
import com.busyqa.crm.repo.UserRepository;
import com.busyqa.crm.repo.UserService;
import com.busyqa.crm.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/admin/user")
public class AdminManageUserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserDetailsServiceImpl userDetailsService;


    private UserService userService;

    @GetMapping("/{id}")
    public ApiResponse<User> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.",userRepository.findById(Long.valueOf(id)));
    }

    @PutMapping("/{id}")
    public ApiResponse<com.busyqa.crm.model.User> update(@RequestBody com.busyqa.crm.model.User userDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "User updated successfully.",userDetailsService.update(userDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
        userDetailsService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.", null);
    }

}
