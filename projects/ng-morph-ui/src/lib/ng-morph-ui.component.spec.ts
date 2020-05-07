import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMorphUiComponent } from './ng-morph-ui.component';

describe('NgMorphUiComponent', () => {
  let component: NgMorphUiComponent;
  let fixture: ComponentFixture<NgMorphUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMorphUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMorphUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
