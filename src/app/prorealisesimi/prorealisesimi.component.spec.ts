import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProrealisesimiComponent } from './prorealisesimi.component';

describe('ProrealisesimiComponent', () => {
  let component: ProrealisesimiComponent;
  let fixture: ComponentFixture<ProrealisesimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProrealisesimiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProrealisesimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
