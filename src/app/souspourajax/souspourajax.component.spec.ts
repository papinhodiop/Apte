import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouspourajaxComponent } from './souspourajax.component';

describe('SouspourajaxComponent', () => {
  let component: SouspourajaxComponent;
  let fixture: ComponentFixture<SouspourajaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SouspourajaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouspourajaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
