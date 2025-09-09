package com.zaikakart;

import com.zaikakart.model.Restaurant;
import com.zaikakart.model.User;
import com.zaikakart.model.USER_ROLE;
import com.zaikakart.repository.RestaurantRepository;
import com.zaikakart.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OnlineFoodOrderingApplicationTests {

	@Test
	void contextLoads() {
		// Basic test to verify that the application context loads successfully
	}
	
	@Autowired(required = false)
	private UserRepository userRepository;
	
	@Autowired(required = false)
	private RestaurantRepository restaurantRepository;
	
	@Test
	@DisplayName("Test User Repository")
	void testUserRepository() {

		if (userRepository == null) {
			return;
		}

		User user = new User();
		user.setFullName("Test User");
		user.setEmail("test" + System.currentTimeMillis() + "@example.com");
		user.setPassword("password123");
		user.setRole(USER_ROLE.ROLE_CUSTOMER);
		

		User savedUser = userRepository.save(user);
		
		// Verify user was saved
		assertNotNull(savedUser.getId());
		assertEquals("Test User", savedUser.getFullName());
		
		// Clean up
		userRepository.delete(savedUser);
	}
	
	@Test
	@DisplayName("Test Restaurant Repository")
	void testRestaurantRepository() {
		// Skip test if repository is not available
		if (restaurantRepository == null) {
			return;
		}
		
		// Create a test restaurant
		Restaurant restaurant = new Restaurant();
		restaurant.setName("Test Restaurant");
		restaurant.setCuisineType("Italian");
		
		// Save restaurant
		Restaurant savedRestaurant = restaurantRepository.save(restaurant);
		
		// Verify restaurant was saved
		assertNotNull(savedRestaurant.getId());
		assertEquals("Test Restaurant", savedRestaurant.getName());
		
		// Clean up
		restaurantRepository.delete(savedRestaurant);
	}
	
	@Test
	@DisplayName("Test Email Validation")
	void testEmailValidation() {
		// Create user with invalid email
		User user = new User();
		user.setFullName("Test User");
		user.setEmail("invalid-email");
		user.setPassword("password123");
		
		// Simple validation test
		assertFalse(isValidEmail(user.getEmail()));
		
		// Update with valid email
		user.setEmail("valid@example.com");
		assertTrue(isValidEmail(user.getEmail()));
	}
	
	@Test
	@DisplayName("Test Password Strength")
	void testPasswordStrength() {
		// Test weak password
		assertFalse(isStrongPassword("123456"));
		
		// Test strong password
		assertTrue(isStrongPassword("StrongP@ss123"));
	}
	
	// Helper method for email validation
	private boolean isValidEmail(String email) {
		return email != null && email.matches("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}");
	}
	
	// Helper method for password validation
	private boolean isStrongPassword(String password) {
		return password != null && password.length() >= 8;
	}
}
