import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoveNoteService } from '../../services/love-note.service';
import { LoveNoteFormComponent } from '../love-note-form/love-note-form';
import { LoveNote } from '../../models/love-note.model';

@Component({
  selector: 'app-love-note-list',
  standalone: true,
  imports: [CommonModule, LoveNoteFormComponent],
  templateUrl: './love-note-list.html',
  styleUrl: './love-note-list.css'
})
export class LoveNoteListComponent implements OnInit {
  loveNotes: LoveNote[] = [];
  editMode = false;
  currentNote: LoveNote = {
    message: '',
    authorName: '',
    isAnonymous: false
  };

  constructor(private loveNoteService: LoveNoteService) { }

  ngOnInit(): void {
    this.loadLoveNotes();
  }

  loadLoveNotes(): void {
    this.loveNoteService.getAllLoveNotes().subscribe({
      next: (data) => {
        this.loveNotes = data;
      },
      error: (error) => {
        console.error('Error loading love notes:', error);
      }
    });
  }

  onSubmitNote(loveNote: LoveNote): void {
    if (this.editMode && this.currentNote.id) {
      this.loveNoteService.updateLoveNote(this.currentNote.id, loveNote).subscribe({
        next: () => {
          this.loadLoveNotes();
          this.editMode = false;
          this.currentNote = { message: '', authorName: '', isAnonymous: false };
        },
        error: (error) => {
          console.error('Error updating note:', error);
        }
      });
    } else {
      this.loveNoteService.createLoveNote(loveNote).subscribe({
        next: () => {
          this.loadLoveNotes();
        },
        error: (error) => {
          console.error('Error creating note:', error);
        }
      });
    }
  }

  onEdit(note: LoveNote): void {
    this.editMode = true;
    this.currentNote = { ...note };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onCancelEdit(): void {
    this.editMode = false;
    this.currentNote = { message: '', authorName: '', isAnonymous: false };
  }

  onDelete(id: number | undefined): void {
    if (!id) return;
    
    if (confirm('Are you sure you want to delete this love note? 💔')) {
      this.loveNoteService.deleteLoveNote(id).subscribe({
        next: () => {
          this.loadLoveNotes();
        },
        error: (error) => {
          console.error('Error deleting note:', error);
        }
      });
    }
  }
}