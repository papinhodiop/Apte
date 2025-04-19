import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousecuriteComponent } from './sousecurite.component';

describe('SousecuriteComponent', () => {
  let component: SousecuriteComponent;
  let fixture: ComponentFixture<SousecuriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousecuriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
