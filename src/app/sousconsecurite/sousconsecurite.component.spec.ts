import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousconsecuriteComponent } from './sousconsecurite.component';

describe('SousconsecuriteComponent', () => {
  let component: SousconsecuriteComponent;
  let fixture: ComponentFixture<SousconsecuriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousconsecuriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousconsecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
