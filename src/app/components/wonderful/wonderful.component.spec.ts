import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderfulComponent } from './wonderful.component';

describe('WonderfulComponent', () => {
  let component: WonderfulComponent;
  let fixture: ComponentFixture<WonderfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonderfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
