import { TestBed, inject } from '@angular/core/testing';

import { BanqueRestService } from './banque-rest.service';

describe('BanqueRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BanqueRestService]
    });
  });
  //
  // it('should be created', inject([BanqueRestService], (service: BanqueRestService) => {
  //   expect(service).toBeTruthy();
  // }));
});
