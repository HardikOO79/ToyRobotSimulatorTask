import { TestBed } from '@angular/core/testing';
import { ActionServiceFactory } from './action-service-factory';

import { ActionService } from './action.service';

describe('ActionService', () => {
  let service: ActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [{ provide: ActionService, useFactory: ActionServiceFactory }] });
    service = TestBed.inject(ActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#executeActions should return value', () => {
    expect(service.executeActions()).toBe(false);
  });
});
