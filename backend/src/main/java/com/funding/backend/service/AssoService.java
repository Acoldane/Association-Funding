package com.funding.backend.service;

import com.funding.backend.beans.Asso;
import com.funding.backend.beans.Evenement;

import java.util.List;

public interface AssoService {
    void save(Asso asso);
    void update(Asso asso, Long id);
    void updateEtat(Asso asso, Long id);
    void delete(Long id);
    void deleteAsso(Asso asso);
    Asso getAssoById(Long id);
    List<Asso> getAll();

    Asso getAssoByTitle(String assoName);

    Asso getAssoByEvenement(Evenement event);
}
