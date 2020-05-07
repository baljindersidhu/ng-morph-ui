import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbookWelcomePageComponent } from './handbook-welcome-page.component';

describe('HandbookWelcomePageComponent', () => {
  let component: HandbookWelcomePageComponent;
  let fixture: ComponentFixture<HandbookWelcomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandbookWelcomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandbookWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
