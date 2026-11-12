package com.medichannel.backend.repository;

import com.medichannel.backend.entity.CrudTestRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CrudTestRepository
        extends JpaRepository<CrudTestRecord, Long> {
}