package com.zaikakart.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String description;
    private Long price;

//    inside same category there will be multiple foods
    @ManyToOne
    private Category foodCategory;

//    by elementcollection, it will create separate table for food images
    @Column(length = 1000)
    @ElementCollection
    private List<String> images;

    private boolean available;

//    which restaurant provides this food
//    in one restaurant there are different foods
    @ManyToOne
    private Restaurant restaurant;

    private boolean isVegetarian;
    private boolean isSeasonal;

//    one food has many ingredients and one ingredient can be put into many foods
    @ManyToMany
    private List<IngredientsItem> ingredients = new ArrayList<>();

    private Date creationDate;
}
