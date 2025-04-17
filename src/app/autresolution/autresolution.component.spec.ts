import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutresolutionComponent } from './autresolution.component';

describe('AutresolutionComponent', () => {
  let component: AutresolutionComponent;
  let fixture: ComponentFixture<AutresolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutresolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutresolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
