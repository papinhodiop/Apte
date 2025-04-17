import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsecureinsComponent } from './prosecureins.component';

describe('ProsecureinsComponent', () => {
  let component: ProsecureinsComponent;
  let fixture: ComponentFixture<ProsecureinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProsecureinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProsecureinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
