package com.zaikakart.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.zaikakart.dto.RestaurantDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fullName;

    private String email;

    private String password;

    private USER_ROLE role;

//    JsonIgnore because for fetching orders we will make different API
    @JsonIgnore
//    we are telling that don't use new table for orders, user customer table
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customer")
    private List<Order> orders = new ArrayList<>();

//    Favorite restaurants
    @ElementCollection
    private List<RestaurantDto> favorites = new ArrayList();

//    For storing address of user so user doesn't refill address again and again
//    because one user can has multiple addresses
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
//    orphan removal because if we delete the user from db, then we don't need his address
    private List<Address> addresses = new ArrayList<>();

}
