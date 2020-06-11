import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelousComponent } from './marvelous.component';

describe('MarvelousComponent', () => {
  let component: MarvelousComponent;
  let fixture: ComponentFixture<MarvelousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
