import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousdectionComponent } from './sousdection.component';

describe('SousdectionComponent', () => {
  let component: SousdectionComponent;
  let fixture: ComponentFixture<SousdectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousdectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousdectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
