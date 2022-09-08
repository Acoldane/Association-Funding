package com.funding.backend.service.impl;

import com.funding.backend.beans.Asso;
import com.funding.backend.beans.Evenement;
import com.funding.backend.repositories.EvenementRepository;
import com.funding.backend.service.AssoService;
import com.funding.backend.service.EvenementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EvenementServiceImpl implements EvenementService {
    @Autowired
    EvenementRepository evenementRepository;

    @Autowired
    AssoService assoService;

    @Override
    public void save(Evenement evenement) {
        evenementRepository.save(evenement);
    }

    @Override
    public void update(Evenement evenement, Long id) {
        Evenement e = evenementRepository.findById(id).get();
        e.setName(evenement.getName());
        e.setDescription(evenement.getDescription());
        e.setEtat(evenement.getEtat());
        e.setDate(evenement.getDate());
        e.setTargetAmount(evenement.getTargetAmount());
        e.setAccountInfo(evenement.getAccountInfo());
        evenementRepository.save(e);
    }

    @Override
    public void updateEtat(Evenement evenement, Long id) {
        Evenement e = evenementRepository.findById(id).get();
        e.setEtat(evenement.getEtat());
        evenementRepository.save(e);
    }

    @Override
    public void delete(Long id) {
        evenementRepository.deleteById(id);
    }

    @Override
    public void deleteEvenement(Evenement evenement) {
        evenementRepository.delete(evenement);
    }

    @Override
    public Evenement getEvenementById(Long id) {
        return evenementRepository.findById(id).get();
    }

    @Override
    public List<Evenement> getAll() {
        return evenementRepository.findAll();
    }

    @Override
    public List<Evenement> getEvenementByAsso(String title) {
        Asso asso = assoService.getAssoByTitle(title);
        return evenementRepository.findByAsso(asso);
    }

    @Override
    public Evenement getEvenementByName(String name) {
        return evenementRepository.findByName(name);
    }
}
