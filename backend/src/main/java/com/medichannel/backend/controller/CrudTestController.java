package com.medichannel.backend.controller;

import com.medichannel.backend.dto.CrudTestRequest;
import com.medichannel.backend.dto.CrudTestResponse;
import com.medichannel.backend.service.CrudTestService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/crud-tests")
public class CrudTestController {

    private final CrudTestService service;

    public CrudTestController(CrudTestService service) {
        this.service = service;
    }

    // CREATE
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CrudTestResponse create(
            @Valid @RequestBody CrudTestRequest request) {

        return service.create(request);
    }

    // READ ALL
    @GetMapping
    public List<CrudTestResponse> findAll() {

        return service.findAll();
    }

    // READ ONE
    @GetMapping("/{id}")
    public CrudTestResponse findById(@PathVariable Long id) {

        return service.findById(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public CrudTestResponse update(
            @PathVariable Long id,
            @Valid @RequestBody CrudTestRequest request) {

        return service.update(id, request);
    }

    // DELETE
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {

        service.delete(id);
    }
}