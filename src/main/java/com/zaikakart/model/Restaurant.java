package com.zaikakart.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

//    one owner have only one restaurant
    @OneToOne
    private User owner;

    private String name;

    private String description;
    private String cuisineType;

//    one restaurant for one owner
    @OneToOne
    private Address address;

    @Embedded
    private ContactInformation contactInformation;
}
