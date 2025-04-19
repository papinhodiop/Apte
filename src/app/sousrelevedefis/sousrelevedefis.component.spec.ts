import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousrelevedefisComponent } from './sousrelevedefis.component';

describe('SousrelevedefisComponent', () => {
  let component: SousrelevedefisComponent;
  let fixture: ComponentFixture<SousrelevedefisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousrelevedefisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousrelevedefisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
