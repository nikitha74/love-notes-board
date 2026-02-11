import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoveNote } from '../models/love-note.model';

@Injectable({
  providedIn: 'root'
})
export class LoveNoteService {
  private apiUrl = 'http://localhost:8080/api/lovenotes';

  constructor(private http: HttpClient) { }

  getAllLoveNotes(): Observable<LoveNote[]> {
    return this.http.get<LoveNote[]>(this.apiUrl);
  }

  getLoveNoteById(id: number): Observable<LoveNote> {
    return this.http.get<LoveNote>(`${this.apiUrl}/${id}`);
  }

  createLoveNote(loveNote: LoveNote): Observable<LoveNote> {
    return this.http.post<LoveNote>(this.apiUrl, loveNote);
  }

  updateLoveNote(id: number, loveNote: LoveNote): Observable<LoveNote> {
    return this.http.put<LoveNote>(`${this.apiUrl}/${id}`, loveNote);
  }

  deleteLoveNote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}