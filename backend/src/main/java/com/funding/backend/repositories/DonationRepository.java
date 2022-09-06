package com.funding.backend.repositories;

import com.funding.backend.beans.Asso;
import com.funding.backend.beans.Donation;
import com.funding.backend.beans.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {
    List<Donation> findByUser(User user);

    List<Donation> findByAsso(Asso asso);

    List<Donation> findByUserAndAsso(User user, Asso asso);
}
