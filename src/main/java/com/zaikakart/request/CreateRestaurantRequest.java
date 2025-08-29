package com.zaikakart.request;

import com.zaikakart.model.ContactInformation;
import com.zaikakart.model.Address;

import lombok.Data;

import java.util.List;

@Data
public class CreateRestaurantRequest {
    private Long id;
    private String name;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String opningHours;
    private List<String> images;

}
