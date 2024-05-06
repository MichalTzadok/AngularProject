import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsSentCvComponent } from './jobs-sent-cv.component';

describe('JobsSentCvComponent', () => {
  let component: JobsSentCvComponent;
  let fixture: ComponentFixture<JobsSentCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobsSentCvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsSentCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
