package com.valentine.lovenotes.repository;

import com.valentine.lovenotes.model.LoveNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoveNoteRepository extends JpaRepository<LoveNote, Long> {
    // JpaRepository provides all CRUD methods
    // You can add custom queries here if needed
}