package com.zaikakart.request;

import lombok.Data;

@Data
public class IngredientRequest {
private String name;
private long categoryId;
private long restaurantId;
}
