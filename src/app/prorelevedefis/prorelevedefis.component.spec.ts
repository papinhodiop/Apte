import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProrelevedefisComponent } from './prorelevedefis.component';

describe('ProrelevedefisComponent', () => {
  let component: ProrelevedefisComponent;
  let fixture: ComponentFixture<ProrelevedefisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProrelevedefisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProrelevedefisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
