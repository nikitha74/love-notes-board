import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoveNote } from '../../models/love-note.model';

@Component({
  selector: 'app-love-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './love-note-form.html',
  styleUrl: './love-note-form.css'
})
export class LoveNoteFormComponent {
  @Input() editMode = false;
  @Input() loveNote: LoveNote = {
    message: '',
    authorName: null,
    isAnonymous: false
  };
  
  @Output() submitNote = new EventEmitter<LoveNote>();
  @Output() cancelEdit = new EventEmitter<void>();

  onSubmit() {
    if (this.loveNote.message.trim()) {
      if (this.loveNote.isAnonymous) {
        this.loveNote.authorName = null;
      }
      this.submitNote.emit({ ...this.loveNote });
      this.resetForm();
    }
  }

  onCancel() {
    this.cancelEdit.emit();
    this.resetForm();
  }

  resetForm() {
    this.loveNote = {
      message: '',
      authorName: '',
      isAnonymous: false
    };
    this.editMode = false;
  }

  onAnonymousChange() {
    if (this.loveNote.isAnonymous) {
      this.loveNote.authorName = '';
    }
  }
}