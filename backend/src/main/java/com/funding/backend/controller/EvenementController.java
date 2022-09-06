package com.funding.backend.controller;

import com.funding.backend.beans.Evenement;
import com.funding.backend.service.impl.EvenementServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Evenement")
public class EvenementController {
    @Autowired
    EvenementServiceImpl evenementService;

    @PostMapping
    public void createEvenement(@RequestBody Evenement evenement) {
        evenementService.save(evenement);
    }

    @PutMapping("/{id}")
    public void updateEvenement(@PathVariable(value = "id") Long id, @RequestBody Evenement evenement) {
        evenementService.update(evenement, id);
    }

    @PutMapping("/etat/{id}")
    public void updateEvenementEtat(@PathVariable(value = "id") Long id, @RequestBody Evenement evenement) {
        evenementService.updateEtat(evenement, id);
    }

    @DeleteMapping("/{id}")
    public void deleteAssoId(@PathVariable Long id) {
        evenementService.delete(id);
    }

    @GetMapping("/{id}")
    public Evenement findEvenement(@PathVariable Long id) {
        return evenementService.getEvenementById(id);
    }

    @GetMapping
    public List<Evenement> findAll() {
        return evenementService.getAll();
    }

    @GetMapping("/byAsso/{title}")
    public List<Evenement> findByEvenement(@PathVariable("title") String title) {
        return evenementService.getEvenementByAsso(title);
    }
}
