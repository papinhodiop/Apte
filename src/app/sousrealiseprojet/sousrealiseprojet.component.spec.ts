import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousrealiseprojetComponent } from './sousrealiseprojet.component';

describe('SousrealiseprojetComponent', () => {
  let component: SousrealiseprojetComponent;
  let fixture: ComponentFixture<SousrealiseprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousrealiseprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousrealiseprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
