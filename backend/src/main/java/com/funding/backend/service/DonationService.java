package com.funding.backend.service;

import com.funding.backend.beans.Asso;
import com.funding.backend.beans.Donation;
import com.funding.backend.beans.User;
import com.funding.backend.repositories.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class DonationService {

    @Autowired
    DonationRepository donationRepository;

    @Autowired
    AssoService assoService;

    @Autowired
    UserService userService;

    public Donation findDonation(Long id) {
        return donationRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Donation not found!"));
    }

    public void deleteDonation(Long id) {
        donationRepository.deleteById(id);
    }

    public Donation updateDonation(Long id, Donation donation) {
        Donation origDonation = findDonation(id);
        origDonation.setAmount(donation.getAmount());
        origDonation.setEvent(donation.getEvent());
        origDonation.setUser(donation.getUser());
        return donationRepository.save(origDonation);
    }

    public Donation save(Donation donation) {
        return donationRepository.save(donation);
    }

    public List<Donation> getAll() {
        return donationRepository.findAll();
    }

    public List<Donation> findDonationByUser(String email) {
        User user = userService.getUserByEmail(email);
        return donationRepository.findByUser(user);
    }

    public List<Donation> findDonationByAssoc(String title) {
        Asso assoc = assoService.getAssoByTitle(title);
        return donationRepository.findByAsso(assoc);
    }

    public List<Donation> findDonationByAssoAndUser(String email, String assoName) {
        Asso asso = assoService.getAssoByTitle(assoName);
        User user = userService.getUserByEmail(email);

        return donationRepository.findByUserAndAsso(user, asso);
    }
}
