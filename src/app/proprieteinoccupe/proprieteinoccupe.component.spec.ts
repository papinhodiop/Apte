import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprieteinoccupeComponent } from './proprieteinoccupe.component';

describe('ProprieteinoccupeComponent', () => {
  let component: ProprieteinoccupeComponent;
  let fixture: ComponentFixture<ProprieteinoccupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProprieteinoccupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProprieteinoccupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
