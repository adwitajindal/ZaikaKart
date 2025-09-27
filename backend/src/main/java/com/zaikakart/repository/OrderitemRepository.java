package com.zaikakart.repository;

import com.zaikakart.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderitemRepository extends JpaRepository<OrderItem, Long> {

}
