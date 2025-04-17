import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourquoiajaxComponent } from './pourquoiajax.component';

describe('PourquoiajaxComponent', () => {
  let component: PourquoiajaxComponent;
  let fixture: ComponentFixture<PourquoiajaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PourquoiajaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PourquoiajaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
