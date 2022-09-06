package com.funding.backend.repositories;

import com.funding.backend.beans.Asso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AssoRepository extends JpaRepository<Asso, Long> {


    List<Asso> findByTitle(String title);
}
