import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousheroComponent } from './soushero.component';

describe('SousheroComponent', () => {
  let component: SousheroComponent;
  let fixture: ComponentFixture<SousheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousheroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
