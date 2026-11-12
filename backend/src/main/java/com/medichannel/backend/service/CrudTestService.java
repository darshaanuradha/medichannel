package com.medichannel.backend.service;

import com.medichannel.backend.dto.CrudTestRequest;
import com.medichannel.backend.dto.CrudTestResponse;
import com.medichannel.backend.entity.CrudTestRecord;
import com.medichannel.backend.repository.CrudTestRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CrudTestService {

    private final CrudTestRepository repository;

    public CrudTestService(CrudTestRepository repository) {
        this.repository = repository;
    }

    // CREATE
    @Transactional
    public CrudTestResponse create(CrudTestRequest request) {

        CrudTestRecord record = new CrudTestRecord(
                request.name().trim(),
                request.description());

        CrudTestRecord saved = repository.save(record);

        return toResponse(saved);
    }

    // READ ALL
    @Transactional(readOnly = true)
    public List<CrudTestResponse> findAll() {

        return repository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    // READ ONE
    @Transactional(readOnly = true)
    public CrudTestResponse findById(Long id) {

        CrudTestRecord record = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Record not found: " + id));

        return toResponse(record);
    }

    // UPDATE
    @Transactional
    public CrudTestResponse update(Long id, CrudTestRequest request) {

        CrudTestRecord record = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Record not found: " + id));

        record.setName(request.name().trim());
        record.setDescription(request.description());

        CrudTestRecord updated = repository.save(record);

        return toResponse(updated);
    }

    // DELETE
    @Transactional
    public void delete(Long id) {

        if (!repository.existsById(id)) {
            throw new RuntimeException("Record not found: " + id);
        }

        repository.deleteById(id);
    }

    // ENTITY TO RESPONSE DTO
    private CrudTestResponse toResponse(CrudTestRecord record) {

        return new CrudTestResponse(
                record.getId(),
                record.getName(),
                record.getDescription(),
                record.getCreatedAt());
    }
}