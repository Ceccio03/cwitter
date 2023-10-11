import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwitCardComponent } from './cwit-card.component';

describe('CwitCardComponent', () => {
  let component: CwitCardComponent;
  let fixture: ComponentFixture<CwitCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CwitCardComponent]
    });
    fixture = TestBed.createComponent(CwitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
