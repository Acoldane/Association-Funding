package com.funding.backend.controller;

import com.funding.backend.beans.Asso;
import com.funding.backend.service.impl.AssoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/assos")
public class AssoController {
    @Autowired
    AssoServiceImpl assoService;

    @PostMapping
    public void createAsso(@RequestBody Asso asso) {
        assoService.save(asso);
    }

    @PutMapping("/{id}")
    public void updateAsso(@PathVariable(value = "id") Long id, @RequestBody Asso asso) {
        assoService.update(asso, id);
    }

    @PutMapping("/etat/{id}")
    public void updateAssoEtat(@PathVariable(value = "id") Long id, @RequestBody Asso asso) {
        assoService.updateEtat(asso, id);
    }

    @DeleteMapping("/{id}")
    public void deleteAssoId(@PathVariable Long id) {
        assoService.delete(id);
    }

    @GetMapping("/{id}")
    public Asso findAsso(@PathVariable Long id) {
        return assoService.getAssoById(id);
    }

    @GetMapping
    public List<Asso> findAll() {
        return assoService.getAll();
    }
}
