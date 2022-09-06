package com.funding.backend.service.impl;

import com.funding.backend.beans.User;
import com.funding.backend.repositories.UserRepository;
import com.funding.backend.service.EmailSenderService;
import com.funding.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.mail.MessagingException;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    EmailSenderService emailSenderService;

    @Override
    public void save(User user) {
         User u = userRepository.save(user);
         if(userRepository.findById(u.getId()).isPresent()) {
             try {
                 emailSenderService.sendEmailWithAttachment(user.getEmail(),
                         "Vos informations de connexion : \n" +
                                 "Email : " + user.getEmail() + "\n" +
                                 "Mot de passe : " + user.getPassword() + "\n" +
                                 "Cordialement,", "Informations de connexion de votre nouveau compte");
             } catch (MessagingException e) {
                 e.printStackTrace();
             }
         }
    }

    @Override
    public void update(User user, Long id) {
        User u = userRepository.findById(id).get();
        u.setEmail(user.getEmail());
        u.setPassword(user.getEmail());
        u.setUsername(user.getUsername());
        u.setUserType(user.getUserType());
        u.setPhone(user.getPhone());
        userRepository.save(u);
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void deleteUser(User user) {
        userRepository.delete(user);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
    public User getUserByCredentials(String email, String password) {
        return userRepository.findByCredentials(email, password);
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Not found"));
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Not found"));
    }
}
