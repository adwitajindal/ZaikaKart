package com.zaikakart.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.util.List;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Data
@Embeddable
public class RestaurantDto {
    private String title;

    @Column(columnDefinition = "LONGTEXT")
    private String images; // store JSON of List<String>
    
    private String description;
    private Long id;

    private static final ObjectMapper mapper = new ObjectMapper();

    // Helper to get images as List
    public List<String> getImagesList() {
        try {
            return images == null ? null : mapper.readValue(images, new TypeReference<List<String>>() {});
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    // Helper to set images from List
    public void setImagesList(List<String> imagesList) {
        try {
            this.images = mapper.writeValueAsString(imagesList);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
