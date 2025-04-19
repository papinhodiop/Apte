import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousrepondbesoinComponent } from './sousrepondbesoin.component';

describe('SousrepondbesoinComponent', () => {
  let component: SousrepondbesoinComponent;
  let fixture: ComponentFixture<SousrepondbesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousrepondbesoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousrepondbesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
