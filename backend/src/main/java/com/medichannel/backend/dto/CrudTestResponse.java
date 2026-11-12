package com.medichannel.backend.dto;

import java.time.LocalDateTime;

public record CrudTestResponse(
        Long id,
        String name,
        String description,
        LocalDateTime createdAt) {
}