import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtemoinclientComponent } from './protemoinclient.component';

describe('ProtemoinclientComponent', () => {
  let component: ProtemoinclientComponent;
  let fixture: ComponentFixture<ProtemoinclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtemoinclientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtemoinclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
