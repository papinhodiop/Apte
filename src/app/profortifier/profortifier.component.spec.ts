import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfortifierComponent } from './profortifier.component';

describe('ProfortifierComponent', () => {
  let component: ProfortifierComponent;
  let fixture: ComponentFixture<ProfortifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfortifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfortifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
