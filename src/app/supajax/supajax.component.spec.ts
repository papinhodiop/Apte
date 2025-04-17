import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupajaxComponent } from './supajax.component';

describe('SupajaxComponent', () => {
  let component: SupajaxComponent;
  let fixture: ComponentFixture<SupajaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupajaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupajaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
