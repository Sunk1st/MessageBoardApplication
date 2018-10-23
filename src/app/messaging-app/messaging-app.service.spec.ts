import { TestBed, inject } from '@angular/core/testing';

import { MessagingAppService } from './messaging-app.service';

describe('MessagingAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagingAppService]
    });
  });

  it('should be created', inject([MessagingAppService], (service: MessagingAppService) => {
    expect(service).toBeTruthy();
  }));
});
