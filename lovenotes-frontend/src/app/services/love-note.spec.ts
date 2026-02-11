import { TestBed } from '@angular/core/testing';

import { LoveNote } from './love-note';

describe('LoveNote', () => {
  let service: LoveNote;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoveNote);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
