import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoustemoinComponent } from './soustemoin.component';

describe('SoustemoinComponent', () => {
  let component: SoustemoinComponent;
  let fixture: ComponentFixture<SoustemoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoustemoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoustemoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
