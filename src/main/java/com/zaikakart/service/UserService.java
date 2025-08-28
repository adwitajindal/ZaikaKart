package com.zaikakart.service;

import com.zaikakart.model.User;
import jdk.jshell.spi.ExecutionControl;
public interface UserService {
    public User findUserByJwtToken(String Jwt) throws Exception;
    public User findUserByEmail(String Email) throws Exception;
}
