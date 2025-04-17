import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProautresolComponent } from './proautresol.component';

describe('ProautresolComponent', () => {
  let component: ProautresolComponent;
  let fixture: ComponentFixture<ProautresolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProautresolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProautresolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
