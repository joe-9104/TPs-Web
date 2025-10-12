import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie1 } from './partie1';

describe('Partie1', () => {
  let component: Partie1;
  let fixture: ComponentFixture<Partie1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Partie1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Partie1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
