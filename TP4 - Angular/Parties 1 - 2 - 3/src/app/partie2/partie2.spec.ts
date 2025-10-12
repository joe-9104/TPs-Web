import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie2 } from './partie2';

describe('Partie2', () => {
  let component: Partie2;
  let fixture: ComponentFixture<Partie2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Partie2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Partie2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
