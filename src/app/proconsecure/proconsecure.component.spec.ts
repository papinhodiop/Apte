import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProconsecureComponent } from './proconsecure.component';

describe('ProconsecureComponent', () => {
  let component: ProconsecureComponent;
  let fixture: ComponentFixture<ProconsecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProconsecureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProconsecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
