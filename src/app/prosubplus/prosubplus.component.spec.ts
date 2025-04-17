import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsubplusComponent } from './prosubplus.component';

describe('ProsubplusComponent', () => {
  let component: ProsubplusComponent;
  let fixture: ComponentFixture<ProsubplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProsubplusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProsubplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
