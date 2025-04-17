import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstsecuriteComponent } from './constsecurite.component';

describe('ConstsecuriteComponent', () => {
  let component: ConstsecuriteComponent;
  let fixture: ComponentFixture<ConstsecuriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstsecuriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstsecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
