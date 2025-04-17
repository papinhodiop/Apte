import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparteComponent } from './apparte.component';

describe('ApparteComponent', () => {
  let component: ApparteComponent;
  let fixture: ComponentFixture<ApparteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApparteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApparteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
