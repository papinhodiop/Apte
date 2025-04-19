import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApapartementComponent } from './apapartement.component';

describe('ApapartementComponent', () => {
  let component: ApapartementComponent;
  let fixture: ComponentFixture<ApapartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApapartementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApapartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
