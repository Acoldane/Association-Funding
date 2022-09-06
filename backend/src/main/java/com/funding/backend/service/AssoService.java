package com.funding.backend.service;

import com.funding.backend.beans.Asso;

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
}
