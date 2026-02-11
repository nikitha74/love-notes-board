package com.valentine.lovenotes.controller;

import com.valentine.lovenotes.model.LoveNote;
import com.valentine.lovenotes.service.LoveNoteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lovenotes")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular frontend
public class LoveNoteController {
    
    @Autowired
    private LoveNoteService loveNoteService;
    
    // CREATE - POST /api/lovenotes
    @PostMapping
    public ResponseEntity<LoveNote> createLoveNote(@Valid @RequestBody LoveNote loveNote) {
        LoveNote created = loveNoteService.createLoveNote(loveNote);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }
    
    // READ ALL - GET /api/lovenotes
    @GetMapping
    public ResponseEntity<List<LoveNote>> getAllLoveNotes() {
        List<LoveNote> notes = loveNoteService.getAllLoveNotes();
        return ResponseEntity.ok(notes);
    }
    
    // READ ONE - GET /api/lovenotes/{id}
    @GetMapping("/{id}")
    public ResponseEntity<LoveNote> getLoveNoteById(@PathVariable Long id) {
        return loveNoteService.getLoveNoteById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
    
    // UPDATE - PUT /api/lovenotes/{id}
    @PutMapping("/{id}")
    public ResponseEntity<LoveNote> updateLoveNote(
            @PathVariable Long id, 
            @Valid @RequestBody LoveNote loveNote) {
        try {
            LoveNote updated = loveNoteService.updateLoveNote(id, loveNote);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    // DELETE - DELETE /api/lovenotes/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoveNote(@PathVariable Long id) {
        loveNoteService.deleteLoveNote(id);
        return ResponseEntity.noContent().build();
    }
}