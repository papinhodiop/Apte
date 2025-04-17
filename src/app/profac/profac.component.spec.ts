import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfacComponent } from './profac.component';

describe('ProfacComponent', () => {
  let component: ProfacComponent;
  let fixture: ComponentFixture<ProfacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
