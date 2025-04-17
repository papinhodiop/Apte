import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevedefisComponent } from './relevedefis.component';

describe('RelevedefisComponent', () => {
  let component: RelevedefisComponent;
  let fixture: ComponentFixture<RelevedefisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelevedefisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelevedefisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
