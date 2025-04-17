import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolumaisonComponent } from './solumaison.component';

describe('SolumaisonComponent', () => {
  let component: SolumaisonComponent;
  let fixture: ComponentFixture<SolumaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolumaisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolumaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
