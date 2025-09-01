package com.zaikakart.repository;

import com.zaikakart.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Long> {

    public User findByEmail(String username);
}
