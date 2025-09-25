package com.zaikakart.service;

import com.zaikakart.model.Cart;
import com.zaikakart.model.CartItem;
import com.zaikakart.model.User;
import com.zaikakart.request.AddCartItemRequest;

public interface CartService {

    public CartItem addToCart(AddCartItemRequest req, String jwt)throws Exception;

    public CartItem updateCartItemQuantity(Long cartItemId,int quantity)throws Exception;

    public Cart removeItemFromCart(Long cartItemId,String jwt)throws Exception;

    public Long calculateCartTotals(Cart cart)throws Exception;

    public Cart findCartById(Long id)throws Exception;

    public Cart findCartByUserId(Long userId) throws Exception;

    // public Cart 
}
