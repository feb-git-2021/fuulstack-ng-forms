import { TestBed } from '@angular/core/testing';

import { LogResponseInterceptorService } from './log-response-interceptor.service';

describe('LogResponseInterceptorService', () => {
  let service: LogResponseInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogResponseInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
