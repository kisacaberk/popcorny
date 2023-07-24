import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AramaKutusuComponent } from './arama-kutusu.component';

describe('AramaKutusuComponent', () => {
  let component: AramaKutusuComponent;
  let fixture: ComponentFixture<AramaKutusuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AramaKutusuComponent]
    });
    fixture = TestBed.createComponent(AramaKutusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
