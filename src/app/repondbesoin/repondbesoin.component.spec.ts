import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondbesoinComponent } from './repondbesoin.component';

describe('RepondbesoinComponent', () => {
  let component: RepondbesoinComponent;
  let fixture: ComponentFixture<RepondbesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepondbesoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepondbesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
