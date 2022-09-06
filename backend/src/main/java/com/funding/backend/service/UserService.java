package com.funding.backend.service;

import com.funding.backend.beans.User;

import java.util.List;

public interface UserService {
    void save(User user);
    void update(User user, Long id);
    void delete(Long id);
    void deleteUser(User user);
    User getUserById(Long id);
    User getUserByCredentials(String email, String password);
    List<User> getAll();

    User getUserByUsername(String username);

    User getUserByEmail(String email);
}
