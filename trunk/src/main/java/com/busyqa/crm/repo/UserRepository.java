package com.busyqa.crm.repo;

import com.busyqa.crm.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    Boolean existsByTeams(String teams);
    List<User> findAll();
    List<User> findByTeams(String teams);
    User save(User user);

    void deleteById(int id);
    //  User update(User user);
}
