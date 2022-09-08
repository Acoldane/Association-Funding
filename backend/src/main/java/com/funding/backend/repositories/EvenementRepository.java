package com.funding.backend.repositories;

import com.funding.backend.beans.Asso;
import com.funding.backend.beans.Evenement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EvenementRepository extends JpaRepository<Evenement, Long> {
    List<Evenement> findByAsso(Asso asso);

    Evenement findByName(String name);
}
