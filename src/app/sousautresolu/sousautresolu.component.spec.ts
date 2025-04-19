import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousautresoluComponent } from './sousautresolu.component';

describe('SousautresoluComponent', () => {
  let component: SousautresoluComponent;
  let fixture: ComponentFixture<SousautresoluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousautresoluComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousautresoluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
