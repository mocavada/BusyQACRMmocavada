package com.busyqa.crm.controller;

import com.busyqa.crm.message.response.ApiResponse;
import com.busyqa.crm.model.Team;
import com.busyqa.crm.model.TeamName;
import com.busyqa.crm.repo.TeamRepository;
import com.busyqa.crm.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/pm/users")
public class ManagerUserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    TeamRepository teamRepository;

    @GetMapping("/{username}")
    public ApiResponse<User> getTeam(@PathVariable String username) {
        ApiResponse<User> userApiResponse = new ApiResponse<>(HttpStatus.BAD_REQUEST.value(), "Users Not found", null);
        Optional<com.busyqa.crm.model.User> adminUser = userRepository.findByUsername(username);
        String adminTeam = adminUser.get().getTeams();
        if (adminTeam.equals(TeamName.TEAM_ADMIN.name())){
            userApiResponse = new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.", userRepository.findAll());
        }

        else {
            userApiResponse = new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.", userRepository.findByTeams(adminTeam));

        }
        return userApiResponse;
    }
}
