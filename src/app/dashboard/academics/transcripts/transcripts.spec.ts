import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptsComponent } from './transcripts';

describe('Transcripts', () => {
  let component: TranscriptsComponent;
  let fixture: ComponentFixture<TranscriptsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranscriptsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TranscriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
