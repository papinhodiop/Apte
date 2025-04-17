import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdpcComponent } from './vdpc.component';

describe('VdpcComponent', () => {
  let component: VdpcComponent;
  let fixture: ComponentFixture<VdpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VdpcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VdpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
