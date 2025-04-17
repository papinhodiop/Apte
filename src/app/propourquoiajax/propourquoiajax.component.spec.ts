import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropourquoiajaxComponent } from './propourquoiajax.component';

describe('PropourquoiajaxComponent', () => {
  let component: PropourquoiajaxComponent;
  let fixture: ComponentFixture<PropourquoiajaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropourquoiajaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropourquoiajaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
