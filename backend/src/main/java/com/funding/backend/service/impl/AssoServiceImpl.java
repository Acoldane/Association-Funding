package com.funding.backend.service.impl;

import com.funding.backend.beans.Asso;
import com.funding.backend.beans.Evenement;
import com.funding.backend.repositories.AssoRepository;
import com.funding.backend.service.AssoService;
import com.funding.backend.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.mail.MessagingException;
import java.util.List;

@Service
public class AssoServiceImpl implements AssoService {
    @Autowired
    AssoRepository assoRepository;

    @Autowired
    EmailSenderService emailSenderService;

    @Override
    public void save(Asso asso) {
        assoRepository.save(asso);
    }

    @Override
    public void update(Asso asso, Long id) {
        Asso a = assoRepository.findById(id).get();
        a.setTitle(asso.getTitle());
        a.setDescription(asso.getDescription());
        a.setEtat(asso.getEtat());
        a.setPhone(asso.getPhone());
        a.setEmail(asso.getEmail());
        a.setURL(asso.getURL());
        a.setAddress(asso.getAddress());
        assoRepository.save(a);
    }

    @Override
    public void updateEtat(Asso asso, Long id) {
        Asso a = assoRepository.findById(id).get();
        a.setEtat(asso.getEtat());
        assoRepository.save(a);
    }

    @Override
    public void delete(Long id) {
        assoRepository.deleteById(id);
    }

    @Override
    public void deleteAsso(Asso asso) {
        assoRepository.delete(asso);
    }

    @Override
    public Asso getAssoById(Long id) {
        return assoRepository.findById(id).get();
    }

    @Override
    public List<Asso> getAll() {
        return assoRepository.findAll();
    }

    @Override
    public Asso getAssoByTitle(String title) {
        return assoRepository.findByTitle(title).stream().findFirst().orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public void createAssocEmail(Asso asso, String ctx) {
        String url = ctx + "/signup?email=" + asso.getEmail();
        try {
            emailSenderService.sendEmailWithAttachment(
                    asso.getEmail(),
                    "Veuillez enregistrez le compte de votre association dans la page suivante: \n" +
                            url,
                    "enregistrement compte de l'association"
            );
        } catch (MessagingException exception) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Email service failed to send email to " + asso.getEmail());
        }
    }

    @Override
    public Asso getAssoByEvenement(Evenement event) {
        return assoRepository.findByEvenementsContaining(event);
    }
}
