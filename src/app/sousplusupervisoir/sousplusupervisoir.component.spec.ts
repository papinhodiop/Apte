import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousplusupervisoirComponent } from './sousplusupervisoir.component';

describe('SousplusupervisoirComponent', () => {
  let component: SousplusupervisoirComponent;
  let fixture: ComponentFixture<SousplusupervisoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousplusupervisoirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousplusupervisoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
