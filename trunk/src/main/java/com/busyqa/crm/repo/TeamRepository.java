package com.busyqa.crm.repo;


import com.busyqa.crm.model.Team;
import com.busyqa.crm.model.TeamName;
import com.busyqa.crm.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {
    Optional<Team> findByName(String teamName);
    Optional<Team> findById(int id);

}
