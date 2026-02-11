import { Component } from '@angular/core';
import { LoveNoteListComponent } from './components/love-note-list/love-note-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoveNoteListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Love Notes Board';
}