import { TestBed, inject } from '@angular/core/testing';

import { BanqueLocalService } from './banque-local.service';

describe('BanqueLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BanqueLocalService]
    });
  });

  // it('should be created', inject([BanqueLocalService], (service: BanqueLocalService) => {
  //   expect(service).toBeTruthy();
  // }));
});
