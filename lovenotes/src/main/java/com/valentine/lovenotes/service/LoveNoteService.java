package com.valentine.lovenotes.service;

import com.valentine.lovenotes.model.LoveNote;
import com.valentine.lovenotes.repository.LoveNoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoveNoteService {
    
    @Autowired
    private LoveNoteRepository loveNoteRepository;
    
    // Create a new love note
    public LoveNote createLoveNote(LoveNote loveNote) {
        return loveNoteRepository.save(loveNote);
    }
    
    // Get all love notes
    public List<LoveNote> getAllLoveNotes() {
        return loveNoteRepository.findAll();
    }
    
    // Get love note by ID
    public Optional<LoveNote> getLoveNoteById(Long id) {
        return loveNoteRepository.findById(id);
    }
    
    // Update love note
    public LoveNote updateLoveNote(Long id, LoveNote updatedNote) {
        return loveNoteRepository.findById(id)
            .map(note -> {
                note.setMessage(updatedNote.getMessage());
                note.setAuthorName(updatedNote.getAuthorName());
                note.setIsAnonymous(updatedNote.getIsAnonymous());
                return loveNoteRepository.save(note);
            })
            .orElseThrow(() -> new RuntimeException("Love note not found with id: " + id));
    }
    
    // Delete love note
    public void deleteLoveNote(Long id) {
        loveNoteRepository.deleteById(id);
    }
}
