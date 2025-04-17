import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealiseprojetComponent } from './realiseprojet.component';

describe('RealiseprojetComponent', () => {
  let component: RealiseprojetComponent;
  let fixture: ComponentFixture<RealiseprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealiseprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealiseprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
