import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveNoteForm } from './love-note-form';

describe('LoveNoteForm', () => {
  let component: LoveNoteForm;
  let fixture: ComponentFixture<LoveNoteForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveNoteForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveNoteForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
