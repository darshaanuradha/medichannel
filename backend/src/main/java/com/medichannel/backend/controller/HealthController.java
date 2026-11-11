
package com.medichannel.backend.controller;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class HealthController {
    private final JdbcTemplate jdbcTemplate;

    public HealthController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of(
                "status", "UP",
                "application", "MediChannel");
    }

    @GetMapping("/db-health")
    public Map<String, String> checkDatabase() {

        Integer result = jdbcTemplate.queryForObject(
                "SELECT 1",
                Integer.class);

        return Map.of(
                "database", "PostgreSQL",
                "status", result != null && result == 1 ? "CONNECTED" : "FAILED");
    }
}
