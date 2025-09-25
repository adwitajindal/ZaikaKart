package com.zaikakart;

import com.zaikakart.model.Restaurant;
import com.zaikakart.repository.RestaurantRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;

import static org.mockito.Mockito.*;
import java.util.Optional;

@SpringBootTest
@AutoConfigureMockMvc
@WithMockUser
public class RestaurantControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RestaurantRepository restaurantRepository;
    @MockBean
    private com.zaikakart.service.UserService userService;

    @Test
    void testGetRestaurantById() throws Exception {
        Restaurant restaurant = new Restaurant();
        restaurant.setId(1L);
        restaurant.setName("Test Restaurant");
        restaurant.setCuisineType("Italian");
        when(restaurantRepository.findById(1L)).thenReturn(Optional.of(restaurant));
        com.zaikakart.model.User mockUser = new com.zaikakart.model.User();
        mockUser.setId(100L);
        mockUser.setFullName("Test User");
        mockUser.setEmail("testuser@example.com");
        when(userService.findUserByJwtToken(anyString())).thenReturn(mockUser);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants/1")
            .header("Authorization", "Bearer test-jwt-token"))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Test Restaurant"));
    }

    @Test
    void testGetRestaurantById_NotFound() throws Exception {
        when(restaurantRepository.findById(2L)).thenReturn(Optional.empty());
        com.zaikakart.model.User mockUser = new com.zaikakart.model.User();
        mockUser.setId(100L);
        mockUser.setFullName("Test User");
        mockUser.setEmail("testuser@example.com");
        when(userService.findUserByJwtToken(anyString())).thenReturn(mockUser);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants/2")
            .header("Authorization", "Bearer test-jwt-token"))
            .andExpect(MockMvcResultMatchers.status().isNotFound());
    }
}
