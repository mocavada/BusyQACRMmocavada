package com.busyqa.crm.controller;


import com.busyqa.crm.message.request.LoginForm;
import com.busyqa.crm.message.request.SignUpForm;
import com.busyqa.crm.message.response.JwtResponse;
import com.busyqa.crm.message.response.ResponseMessage;
import com.busyqa.crm.model.*;
import com.busyqa.crm.repo.RoleRepository;
import com.busyqa.crm.repo.TeamRepository;
import com.busyqa.crm.repo.UserRepository;
import com.busyqa.crm.security.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthRestAPIs {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {
        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateJwtToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        return ResponseEntity.ok(
                new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity<>(
                    new ResponseMessage("Fail -> Username is already taken!"), HttpStatus.BAD_REQUEST);
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity<>(
                    new ResponseMessage("Fail -> Email is already in use!"), HttpStatus.BAD_REQUEST);
        }

        // creating user account
        User user =
                new User(
                        signUpRequest.getName(),
                        signUpRequest.getUsername(),
                        signUpRequest.getEmail(),
                        encoder.encode(signUpRequest.getPassword()));

        String strTeams = signUpRequest.getTeam();
        if (strTeams.equals("sales")){
            Team salesTeam =
                    teamRepository
                            .findByName(TeamName.TEAM_SALES.name())
                            .orElseThrow(() -> new RuntimeException("Fail! -> Cause: Team  not find."));
            user.setTeams(salesTeam.getName());
        }

        else if (strTeams.equals("admin")){
            Team adminTeam =
                    teamRepository
                            .findByName(TeamName.TEAM_ADMIN.name())
                            .orElseThrow(() -> new RuntimeException("Fail! -> Cause: Team  not find."));
            user.setTeams(adminTeam.getName());
        }

        else if (strTeams.equals("accounts")){
            Team accountsTeam =
                    teamRepository
                            .findByName(TeamName.TEAM_ACCOUNTS.name())
                            .orElseThrow(() -> new RuntimeException("Fail! -> Cause: Team  not find."));
            user.setTeams(accountsTeam.getName());
        }
        else {
            Team unassignedTeam =
                    teamRepository
                            .findByName(TeamName.TEAM_UNASSIGNED.name())
                            .orElseThrow(() -> new RuntimeException("Fail! -> Cause: Team  not find."));
            user.setTeams(unassignedTeam.getName());
        }

        String strRoles = signUpRequest.getRole();

        if (strRoles.equals("admin")){
            Role adminRole =
                    roleRepository
                            .findByName(RoleName.ROLE_ADMIN.name())
                            .orElseThrow(
                                    () -> new RuntimeException("Fail! -> Cause: User Role not find."));
            user.setRoles(adminRole.getName());

        }

        else if (strRoles.equals("pm")){
            Role pmRole =
                    roleRepository
                            .findByName(RoleName.ROLE_PM.name())
                            .orElseThrow(
                                    () -> new RuntimeException("Fail! -> Cause: User Role not find."));
            user.setRoles(pmRole.getName());
        }

       else {
            Role userRole =
                    roleRepository
                            .findByName(RoleName.ROLE_USER.name())
                            .orElseThrow(
                                    () -> new RuntimeException("Fail! -> Cause: User Role not find."));
            user.setRoles(userRole.getName());
        }

       userRepository.save(user);
        return new ResponseEntity<>(
                new ResponseMessage("User registered successfully!"), HttpStatus.OK);
    }
}

