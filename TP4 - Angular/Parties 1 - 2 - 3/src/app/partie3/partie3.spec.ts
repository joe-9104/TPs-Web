import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie3 } from './partie3';

describe('Partie3', () => {
  let component: Partie3;
  let fixture: ComponentFixture<Partie3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Partie3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Partie3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
