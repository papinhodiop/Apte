import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProheroComponent } from './prohero.component';

describe('ProheroComponent', () => {
  let component: ProheroComponent;
  let fixture: ComponentFixture<ProheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProheroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
