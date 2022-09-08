package com.funding.backend.service;

import com.funding.backend.beans.Asso;
import com.funding.backend.beans.Donation;
import com.funding.backend.beans.Evenement;
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

    @Autowired
    EvenementService evenementService;

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

    public List<Donation> findDonationByEvent(String name) {
        Evenement event = evenementService.getEvenementByName(name);
        return donationRepository.findByEvent(event);
    }

    public List<Donation> findDonationByEventAndUser(String email, String eventName) {
        Evenement event = evenementService.getEvenementByName(eventName);
        User user = userService.getUserByEmail(email);

        return donationRepository.findByUserAndEvent(user, event);
    }
}
