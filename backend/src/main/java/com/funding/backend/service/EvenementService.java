package com.funding.backend.service;

import com.funding.backend.beans.Evenement;

import java.util.List;

public interface EvenementService {
    void save(Evenement evenement);
    void update(Evenement evenement, Long id);
    void updateEtat(Evenement evenement, Long id);
    void delete(Long id);
    void deleteEvenement(Evenement evenement);
    Evenement getEvenementById(Long id);
    List<Evenement> getAll();

    List<Evenement> getEvenementByAsso(String title);

    Evenement getEvenementByName(String name);
}
