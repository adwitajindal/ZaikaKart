package com.zaikakart.request;

import com.zaikakart.model.Address;
import lombok.Data;

@Data
public class OrderRequest {
    private Long restaurantId;
    private Address deliveryAddress;
    
}
