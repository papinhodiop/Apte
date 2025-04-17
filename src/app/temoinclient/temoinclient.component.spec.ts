import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoinclientComponent } from './temoinclient.component';

describe('TemoinclientComponent', () => {
  let component: TemoinclientComponent;
  let fixture: ComponentFixture<TemoinclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemoinclientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemoinclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
