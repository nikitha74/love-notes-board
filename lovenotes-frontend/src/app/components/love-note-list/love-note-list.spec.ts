import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveNoteList } from './love-note-list';

describe('LoveNoteList', () => {
  let component: LoveNoteList;
  let fixture: ComponentFixture<LoveNoteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveNoteList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveNoteList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
