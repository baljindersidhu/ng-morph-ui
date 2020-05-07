import { TestBed } from '@angular/core/testing';

import { NgMorphUiService } from './ng-morph-ui.service';

describe('NgMorphUiService', () => {
  let service: NgMorphUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMorphUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
