import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApheroComponent } from './aphero.component';

describe('ApheroComponent', () => {
  let component: ApheroComponent;
  let fixture: ComponentFixture<ApheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApheroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
