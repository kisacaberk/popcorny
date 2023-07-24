import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmlerComponent } from './filmler.component';

describe('FilmlerComponent', () => {
  let component: FilmlerComponent;
  let fixture: ComponentFixture<FilmlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmlerComponent]
    });
    fixture = TestBed.createComponent(FilmlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
