package com.funding.backend.controller;

import com.funding.backend.beans.Donation;
import com.funding.backend.service.DonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/donations")
public class DonationController {

    @Autowired DonationService donationService;

    @GetMapping("/{donationId}")
    public Donation getDonation(@PathVariable("donationId") Long id) {
        return donationService.findDonation(id);
    }

    @GetMapping
    public List<Donation> getAll() {
        return donationService.getAll();
    }

    @GetMapping("/user/{email}")
    public List<Donation> getAllDonationsForUser(@PathVariable("email") String email) {
        return donationService.findDonationByUser(email);
    }

    @GetMapping("/{email}/{asso}")
    public List<Donation> getAllDonationsForUserAndEvent(@PathVariable("email") String email,
                                                 @PathVariable("asso") String title) {
        return donationService.findDonationByEventAndUser(email, title);
    }

    @GetMapping("/asso/{title}")
    public List<Donation> getAllDonationsForEvent(@PathVariable("title") String title) {
        return donationService.findDonationByEvent(title);
    }
}
